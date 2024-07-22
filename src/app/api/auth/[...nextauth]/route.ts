// /api/auth/[nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Adapter from "@/adapters/users";
import axios from "axios";
import https from "https";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const instance = axios.create({
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        });

        instance.get("https://staging.mrfsafe.com/api/gateway");

        const agent = new https.Agent({
          rejectUnauthorized: false,
        });

        try {
          // Replace these with actual credentials fields if they differ
          const { username, password } = credentials as {
            username: string;
            password: string;
          };

          // Make the API request to the login gateway
          const response = await axios.get(
            "https://staging.mrfsafe.com/api/gateway",
            {
              params: {
                username: username,
                password: password,
              },
              headers: {
                "Content-Type": "application/json",
              },
              httpsAgent: agent,
            }
          );

          // Check the response from your API
          const data = response.data; // Axios automatically parses the JSON response
          console.log("Data from login gateway:", data);
          if (data.status === "200" && data.data.userType === "Internal") {
            console.log("Login successful as Internal User", data.data);
            // If login is successful, return the user object
            return {
              id: data.data.userId,
              name: data.data.name,
              email: data.data.email,
              image: null,
              // You can add more user properties here
            };
          } else {
            // If login is not successful, throw an error or return null
            console.log("Login failed:", data.message);
            return null;
          }
        } catch (error) {
          // If the request fails or the credentials are wrong, return null
          console.error("Error in authorize function:", error);
          if ((error as any)?.response) {
            console.error("Response data:", (error as any)?.response.data);
          }
          return null;
        }
      },
    }),
  ],
  // Remove or adjust the adapter if you're not using it or if it needs to be updated for the new DB schema
  adapter: Adapter,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
