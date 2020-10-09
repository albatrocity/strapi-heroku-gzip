module.exports = {
  timeout: 100,
  load: {
    after: ["router"]
  },
  settings: {
    public: {
      path: "./public",
      maxAge: 60000
    },
    parser: {
      enabled: true,
      multipart: true,
      includeUnparsed: true
    },
    csrf: {
      enabled: false,
      key: "_csrf",
      secret: "_csrfSecret"
    },
    csp: {
      enabled: true,
      policy: ["block-all-mixed-content"]
    },
    p3p: {
      enabled: true,
      value: ""
    },
    hsts: {
      enabled: true,
      maxAge: 31536000,
      includeSubDomains: true
    },
    xframe: {
      enabled: true,
      value: "SAMEORIGIN"
    },
    xss: {
      enabled: true,
      mode: "block"
    },
    cors: {
      enabled: true,
      origin: "*",
      expose: ["WWW-Authenticate", "Server-Authorization"],
      maxAge: 31536000,
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
      headers: [
        "Content-Type",
        "Authorization",
        "X-Frame-Options",
        "Origin",
        "X-Backdrop-Api-Key"
      ]
    },
    ip: {
      enabled: false,
      whiteList: [],
      blackList: []
    },
    session: {
      enabled: true,
      client: "cookie",
      key: "strapi.sid",
      prefix: "strapi:sess:",
      secretKeys: ["mySecretKey1", "mySecretKey2"],
      httpOnly: true,
      maxAge: 86400000,
      overwrite: true,
      signed: false,
      rolling: false
    },
    logger: {
      level: "info",
      exposeInContext: true,
      requests: false
    },
    gzip: {
      enabled: true
    },
    responseTime: {
      enabled: false
    },
    poweredBy: {
      enabled: true,
      value: "Strapi <strapi.io>"
    }
  }
};
