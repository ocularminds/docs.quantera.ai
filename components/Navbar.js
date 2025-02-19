"use client"
import React,{useEffect, useState} from 'react';
import { useSession } from "next-auth/react"
import {Navbar} from 'nextra-theme-docs';
import Link from 'next/link';

function Navbars(props) {
    const { data: session } = useSession();
    const [tool, setTool] = useState({label:'Learn More...', link: 'https://quantera.ai'});
    const [account, setAccount] = useState({label:'Sign In', link: '/login'});
    useEffect(() =>  {
        if(session){
            setAccount({label: session.user?.name, link: '/#'});
            setTool({label:'Api Key', link:'/ssm'});
        }
    });
    return (
    <Navbar {...props}>
      <Link href={account.link} className="button">
        <b>{account.label}</b>
      </Link>
      <Link href={tool.link} className="button">
        <b>{tool.label}</b>
      </Link>
    </Navbar>
  );
}

export default Navbars;