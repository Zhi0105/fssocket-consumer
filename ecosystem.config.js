module.exports = {
  apps: [
    {
      name: 'fssocket-consumer',
      script: 'dist/main.js', // Path to the main file of your built app
      // instances: 'max', // Use 'max' to scale based on available CPU cores
      exec_mode: 'cluster', // Enables cluster mode
      env: {
        "DATABASE_URL": "mysql://fsphadmin:ML+s1l4X6APPZikzp+tu@fsph-v2.crbdk6jid9mo.ap-southeast-1.rds.amazonaws.com:3306/data_collections",
        "DIRECT_URL": "mysql://fsphadmin:ML+s1l4X6APPZikzp+tu@fsph-v2.crbdk6jid9mo.ap-southeast-1.rds.amazonaws.com:3306/data_collections",
        "SOCKET_URL": "http://localhost:3001",
        "PORT": 3002,
        "ENV": 'DEV',
      },
      env_production: {
        "DATABASE_URL": "mysql://fsphadmin:ML+s1l4X6APPZikzp+tu@fsph-v2.crbdk6jid9mo.ap-southeast-1.rds.amazonaws.com:3306/data_collections",
        "DIRECT_URL": "mysql://fsphadmin:ML+s1l4X6APPZikzp+tu@fsph-v2.crbdk6jid9mo.ap-southeast-1.rds.amazonaws.com:3306/data_collections",
        "SOCKET_URL": "http://localhost:3001",
        "PORT": 3002,
        "ENV": 'PROD',
      },
    },
  ],
};