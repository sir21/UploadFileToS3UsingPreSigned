const s3 = new aws.S3({
    signatureVersion: 'v4',
  });
  aws.config.update({ accessKeyId: '*', secretAccessKey: '*' });
  const fileName = uuid();
  const params = { Bucket: '<YOUR_BUCKET_NAME>', Key: fileName, ACL: 'public-read' };
  let url;
  try {
    url = s3.getSignedUrl('putObject', params);
  } catch (error) {
    throw new Error(error);
  }

  console.log('Signed S3 URL is', url);