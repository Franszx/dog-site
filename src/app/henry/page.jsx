export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  return {
    title: data.name,
    description: `Loves ${data.favouriteColor}`,
  };
}

export default async function Henry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  const { name, favouriteColor, age, image } = data;
  return (
    <main>
      <h1>This is {data.name}</h1>
      <p>His favorite color is : {data.favouriteColor}</p>
      <p>He is {data.age} years old</p>
      {/* <img src={data.image} alt="picture of henry here"></img> */}
    </main>
  );
}
