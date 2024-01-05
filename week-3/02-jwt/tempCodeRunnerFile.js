const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

function verifyJwt(token) {
    // Your code here
    try{
        const decode = jwt.verify(token, jwtPassword)
        return true;
    }
    catch(err){
        if(err){
            return false
        }
    }
}
console.log(verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNodWJoYW1AZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0Nzg5IiwiaWF0IjoxNzA0MDUzMzkxfQ.C9bNgaKFGumtLRZ_r2jVhrnPJc17PfssKnDSKnjC0AQ"))