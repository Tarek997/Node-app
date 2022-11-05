const os=require ('os')
// console.log(os)
const user = os.userInfo()
console.log(user)
const whatever={

    totalmem:os.totalmem(),
    freemem:os.freemem(),
    system:os.release(),
    systemtype:os.type(),
    systemversion:os.version(),
    systemtime:os.uptime(),
    
}
console.log(whatever)

const path= require('path')
console.log(path)

const filepath=path.join('/folder','subfolder','text.txt')
const basename=path.basename(filepath)
console.log(filepath)
console.log(basename)

const abs=path.resolve(__dirname,'folder','subfolder','text.txt')
console.log(abs)

// let newabs="C:\Users\Lenovo\Desktop\node\app.js"
const abspath=path.isAbsolute('C:/Users/Lenovo/Desktop/node')
// backword ' /// ' should be given...
console.log(abspath)




