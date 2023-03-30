async function getImgUrl(url = '') {
    await fetch(url)
}

async function fun() {
    //url = 'https://photos.onedrive.com/photo/87389B80BDFB9E74!4882?view=all'
  const  url = "https://photos.onedrive.com/photo/87389B80BDFB9E74!4882?view=all/-6104877583121364502_121.jpg"
    const start = Date.now()
    await getImgUrl(url)
    const timeOut = Date.now() - start
    console.log('加载图片共花费了'+timeOut+'ms')
}
fun()