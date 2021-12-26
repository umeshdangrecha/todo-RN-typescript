const images: string[] = [
  "https://media.istockphoto.com/photos/moving-out-beautiful-smiling-overweight-woman-sitting-on-the-floor-picture-id1346727107?b=1&k=20&m=1346727107&s=170667a&w=0&h=atFDdWixzHNH9eqxXl7x01DLrB5vmo6OoEkgEgb7FI4=",
  "https://media.istockphoto.com/photos/beautiful-smiling-black-woman-making-a-todo-list-while-sitting-on-her-picture-id1341262348?b=1&k=20&m=1341262348&s=170667a&w=0&h=y6Ju5lEigYAcX6jKJHdogQQArOUHSHC8zXDd4qej-mc=",
  "https://media.istockphoto.com/photos/my-todo-list-keeps-growing-picture-id1302808713?b=1&k=20&m=1302808713&s=170667a&w=0&h=mlOkFcic7Yo2ksrBHPyUoRI5NIELafPOv6CFniE7Yy0=",
  "https://media.istockphoto.com/photos/christmas-mosk-up-wish-list-on-gray-background-notebook-todo-list-picture-id1353555263?b=1&k=20&m=1353555263&s=170667a&w=0&h=vzEDPc4uCz5Mb58Dc2JT05FLMAFR7PqEba2Y001JbDI=",
  "https://images.unsplash.com/photo-1589987607627-616cac5c2c5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRvZG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1465708897837-11a63009dc73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRvZG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
];

const defaultImage =
  "https://media.istockphoto.com/photos/moving-out-beautiful-smiling-overweight-woman-sitting-on-the-floor-picture-id1346727107?b=1&k=20&m=1346727107&s=170667a&w=0&h=atFDdWixzHNH9eqxXl7x01DLrB5vmo6OoEkgEgb7FI4=";

const pickRandomImage = () => {
  const totalCount = images.length - 1;
  const index = Math.ceil(Math.random() * totalCount);
  if (index >= 0 && index < totalCount) return images[index];
  return defaultImage;
};
export const pickImageByIndex = (index: number) => {
  const totalCount = images.length - 1;
  const actualIndex = index % totalCount;
  return images[actualIndex];
};

export default pickRandomImage;
