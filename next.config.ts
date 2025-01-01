import type { NextConfig } from "next";
import { config } from "dotenv";

// .env.local 파일의 환경 변수를 로드합니다.
config();

const nextConfig: NextConfig = {
  env: {
    NOTION_TOKEN: process.env.NOTION_TOKEN,
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
  },
};

export default nextConfig;
