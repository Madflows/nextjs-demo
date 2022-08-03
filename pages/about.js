import Head from "next/head";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";


const about = () => {
  return (
    <div className="text-center w-full py-8 rounded-lg shadow bg-green-100 flex flex-col gap-4 items-center justify-center">
      <Head>
        <title>About Us</title>
        <meta name="keywords" content="About Web Newz, Next.js" />
      </Head>
      <h1 className="text-3xl">About Us</h1>
      <p className="px-4 max-w-[950px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi eum sint
        iusto esse sed laudantium eligendi perferendis necessitatibus, omnis ex
        aliquid quisquam asperiores tempore, ea cupiditate iste? Tenetur
        pariatur officia, corporis quod error praesentium dicta maiores nostrum
        sint velit molestias!
      </p>
      <Link href={"/"}>
        <div className="btn group">
          <span>
            <BsArrowLeftShort className="text-2xl group-hover:-translate-x-1 transition" />
          </span>
          <span>Back to Home</span>
        </div>
      </Link>
    </div>
  );
};

export default about;
