import Footer from "@/components/layout/footer/pages";
import Navbar from "@/components/layout/navbar/page";
import Image from "next/image";
import Loading from "@/components/layout/loading/page";

export default function Home() {
  return (
    <>
     <Navbar />
      <section className="px-16 mt-10 grid grid-cols-2">
        <div>
          <Image
            className="rounded-3xl"
            src="https://source.unsplash.com/600x400?orange"
            alt="Orange"
            width={600}
            height={400}
          />
        </div>
        <div className="pl-10">
          <p className="font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
            voluptate dolorum ullam nesciunt earum beatae harum asperiores quos aut,
            laborum nobis minima amet sapiente perspiciatis in magni aspernatur,
            dignissimos animi! Sequi fugit omnis laboriosam neque nobis molestiae,
            id nulla. Ex ducimus consectetur aliquam quos ut possimus necessitatibus
            excepturi ratione facere? Modi aliquid cupiditate vero rem molestiae
            necessitatibus fuga tenetur quis aperiam illum magnam, inventore beatae
            suscipit commodi atque eum explicabo consectetur aspernatur? Autem
            molestias ab ullam, ratione rerum aspernatur corporis commodi impedit
            quas ipsum enim inventore ducimus ut nobis aliquam in dolores rem illo
            esse. Tenetur quo eius harum ratione.
          </p>
        </div>
      </section>
      <section className="px-16 grid grid-cols-3 justify-center mt-10">
        {[1, 2, 3].map((index) => (
          <div key={index} className="text-center px-3">
            <Image
              className="rounded-full ml-12"
              src={`https://source.unsplash.com/250x250?pink${index}`}
              alt={`Pink ${index}`}
              width={250}
              height={250}
            />
            <p className="pt-6 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              blanditiis doloremque consequatur deleniti facilis libero praesentium
              error illo, asperiores fugiat tempore aspernatur pariatur officia
              eligendi, quia quasi recusandae inventore perspiciatis.
            </p>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}
