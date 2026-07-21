function a(e){if(e instanceof Date)return e;const t=/^(\d{4})-(\d{2})-(\d{2})/.exec(e);if(!t)return new Date(e);const[,n,r,c]=t;return new Date(Number(n),Number(r)-1,Number(c))}export{a as p};
