import S3 from 'aws-sdk/clients/s3.js'
import dotenv from 'dotenv'
import * as fs from 'fs'
dotenv.config()

const bucket = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY


const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

//upload to s3
export const uploadFile = (file) => {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucket,
        Body: fileStream,
        Key: file.filename
    }

    return s3.upload(uploadParams).promise()
}
//get from s3
export const deleteFile = (fileKey) => {
    const deleteParams = {
        Key: fileKey,
        Bucket: bucket
    }
    return s3.deleteObject(deleteParams).promise()
}
