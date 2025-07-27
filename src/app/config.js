// src/appwriteConfig.js
import { Client, Account, ID } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://fra.cloud.appwrite.io/v1') // ✅ Use your correct endpoint
  .setProject('68812dfc0006477efe91')             // ✅ Replace with your actual Project ID
  .setDevKey('4e8550a9ae5749cecac1b703d6b545920a3b9300e9d018fd69e7e8c782be2057475dfb1bdf920f737c0fce82695d893dfea7b041a98075a31eef799f3ceef45370520510eeee05e21a8aa4d83a455a4ee376a77e10b0e03ab94b88421bd4daba07a0184883d4e56ab6af927f34244ed7f3d227a6800c36909db00f03f62f0674')

const account = new Account(client);

export { client, account, ID };
