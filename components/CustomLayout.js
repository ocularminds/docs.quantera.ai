"use client"
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Layout } from "nextra-theme-docs";
import { SidebarFooter } from "./SidebarFooter";

export function CustomLayout({ children, ...props }) {
  const sidebarFooterRef = useRef(null);

  useEffect(() => {
    const sidebarContainer = document.querySelector(".nextra-sidebar-footer");
    if (sidebarContainer) {
      const footerDiv = document.createElement("div");
      sidebarFooterRef.current = footerDiv;
      sidebarContainer.appendChild(footerDiv);
      return () => {
        sidebarContainer.removeChild(footerDiv);
      };
    }
  }, []);

  return (
    <Layout {...props}>
      {children}
      {sidebarFooterRef.current &&
        createPortal(<SidebarFooter />, sidebarFooterRef.current)}
    </Layout>
  );
}