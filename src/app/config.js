// src/appwriteConfig.js
import { Client, Account, ID } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://fra.cloud.appwrite.io/v1') // ✅ Use your correct endpoint
  .setProject('68812dfc0006477efe91');             // ✅ Replace with your actual Project ID

const account = new Account(client);

export { client, account, ID };
