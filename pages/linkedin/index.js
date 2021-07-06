import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "@/styles/LinkedIn.module.css";

export default function GithubPage({ linkedUser }) {
  const router = useRouter();

  console.log(linkedUser);

  return <Layout>{linkedUser.message}</Layout>;
}

export async function getStaticProps({ username }) {
  const linkedUserRes = await fetch(`https://api.linkedin.com/v2/me`);
  const linkedUser = await linkedUserRes.json();

  return {
    props: {
      linkedUser,
    },
    revalidate: 1,
  };
}
