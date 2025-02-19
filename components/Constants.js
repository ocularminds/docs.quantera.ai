const pageMap = [{data: {
    login: {
      title: 'Sign In',
      type: 'page',
      route: '/login',
      frontMatter: {
        title: 'Quantera Api 2.0',
        description: 'Quantera API',
        sidebarTitle: 'Getting Started 🚀',
        filePath: 'content/index.mdx',
        timestamp: 1739887552296
      },
      theme: {
        breadcrumb: true,
        footer: true,
        layout: "full",
        toc: true,
        sidebar: true,
      },
    },
    ssm: {
      title: 'Api Key',
      type: 'page',
      route: '/ssm',
      frontMatter: {
        title: 'Quantera Api 2.0',
        description: 'Quantera API',
        sidebarTitle: 'Getting Started 🚀',
        filePath: 'content/index.mdx',
        timestamp: 1739887552296
      },
      theme: {
        breadcrumb: true,
        footer: true,
        layout: "full",
        toc: true,
        sidebar: true,
      },
    },
    subscribe: {
      title: 'Subscribe',
      type: 'page',
      route: '/subscribe',
      frontMatter: {
        title: 'Subscription',
        description: 'Subscribe to API',
        sidebarTitle: 'Getting Started 🚀',
        filePath: 'content/index.mdx',
        timestamp: 1739887552296
      },
      theme: {
        breadcrumb: true,
        footer: true,
        layout: "full",
        toc: true,
        sidebar: true,
      },
    },
  }}];

const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh", // Full viewport height
      backgroundColor: "#f9f9f9", // Light background color
    },
    card: {
      backgroundColor: "#ffffff", // White background
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
      textAlign: "center",
      width: "100%",
      maxWidth: "400px", // Limit card width
    },
    title: {
      fontSize: "1.5rem",
      marginBottom: "1.5rem",
      color: "#333", // Dark text color
    },
    input: {
        display: 'block',
        width: '100%',
        padding: '0.75rem',
        margin: '0.5rem 0',
        fontSize: '1rem',
        border: '1px solid #ddd',
        borderRadius: '4px',
        outline: 'none',
        focus: {borderColor: '#0070f3'}
    },
    button: {
        display: "block",
        width: "100%",
        padding: "0.75rem",
        margin: "0.5rem 0",
        fontSize: "1rem",
        color: "#fff",
        backgroundColor: "#0070f3",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    },
    buttonHover: {
        backgroundColor: "#005bb5", 
    },
  planSelector: {
    display: 'flex',
    gap: '1rem',
    margin: '1.5rem 0',
  },
  planButton: {
    flex: '1',
    padding: '1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#0070f3',
    backgroundColor: '#fff',
    border: '2px solid #0070f3',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  planButtonActive: {
    backgroundColor: '#0070f3',
    color: '#fff',
  },
  
  planButtonHover :{
    backgroundColor: '#0070f3',
    color: '#fff',
  },
  
  planPrice: {
    fontSize: '0.875rem',
    fontWeight: 'normal',
    marginTop: '0.5rem',
    color: 'inherit',
  }
};
const kss = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f9f9f9',
      },
      card: {
        backgroundColor: '#ffffff',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '100%',
        maxWidth: '400px',
      },
      title: {
        fontSize: '1.5rem',
        marginBottom: '1.5rem',
        color: '#333',
      },info: {
        fontSize: '1rem',
        margin: '0.5rem 0',
        color: '#555',
      },apiKeyContainer: {
        marginTop: '1.5rem',
      },apiKeyLabel: {
        fontSize: '1rem',
        color: '#333',
      },apiKey: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#0070f3',
        wordBreak: 'break-all',
      },
      button: {
        display: 'block',
        width: '100%',
        padding: '0.75rem',
        margin: '1rem 0',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#0070f3',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      },
      buttonHover: {
        backgroundColor: '#005bb5',
      }
}
export {pageMap, styles, kss};