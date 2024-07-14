"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import NewProject from '../_components/template/workTool'
const page = () => {
  const router = useRouter();
  const [isAuthor, setIsAuthor] = useState(false);

  useEffect(() => {
    fetch("/api/resetAuthorToken")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.status === 200) {
          setIsAuthor(true);
          
        } else {
          router.replace("/coWorker/employment");
        }
      });
  }, []);

  return isAuthor && <NewProject />;
};

export default page;
