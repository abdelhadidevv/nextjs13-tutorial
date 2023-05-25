//I don't want to use Image component from next/image
/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { notFound } from "next/navigation";

interface RandomDogProps {}

const getRandomDogImage = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random", {
        next: {
          revalidate: 60,
        },
      });
      const data = await response.json();
      resolve(data);
    }, 2500);
  });
};
// This error for TypeScript

/* @ts-expect-error Server Component */
const RandomDog: FC<RandomDogProps> = async () => {
  const dog: any = await getRandomDogImage();

  if (!dog || !dog?.message) {
    notFound();
  }

  return (
    <div>
      <img
        className="w-full h-72 mb-4 object-cover rounded bg-gray-700"
        src={dog?.message}
        alt="dog"
      />
      <h5 className="mb-4 text-2xl font-bold tracking-tight text-white">
        Random Dog
      </h5>
      <div className="text-gray-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
        voluptate quas amet hic, assumenda, expedita ullam fugiat accusantium,
        obcaecati beatae aperiam distinctio quaerat. Voluptates minima est
        maxime omnis sed? Et veniam pariatur culpa, temporibus voluptates vero
        nostrum autem aliquam ex officiis, aspernatur aut ad earum accusantium,
        ullam optio laborum nisi ducimus. Modi et nihil pariatur ullam laborum
        temporibus praesentium a neque facilis, atque ipsum natus quidem.
        Aliquam facere vitae fuga odio exercitationem numquam quod, impedit
        provident, maiores adipisci perferendis et at neque cum sapiente.
        Reprehenderit vel culpa in temporibus earum consequuntur vero, assumenda
        repellendus iure nam illum aperiam, veritatis, at recusandae. Odio
        exercitationem tempore aut, odit mollitia consectetur cumque accusamus,
        distinctio amet non quis dolores? At vitae, possimus eius expedita,
        cupiditate placeat quo et nesciunt provident exercitationem eligendi
        adipisci officiis officia necessitatibus ex, corrupti obcaecati iste
        dignissimos debitis minus sapiente repudiandae alias. Error assumenda
        aliquam nulla ducimus neque ipsum, eum consectetur libero facilis
        repellendus vel eius ad maiores fuga provident corrupti illum omnis
        eveniet velit, commodi dolorum similique debitis? Iure suscipit iste aut
        rerum autem maiores necessitatibus saepe ut unde laboriosam corporis
        repudiandae a nobis hic porro aspernatur consectetur animi ratione,
        quibusdam minus, delectus minima dicta est. Doloribus, fugit magni.
      </div>
    </div>
  );
};

export default RandomDog;
