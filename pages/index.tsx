import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useCartContext } from "@/hooks/useCart";

export default function Home() {
  const { total, numberOfItems, placeOrder, updateCart, clearCart, products } =
    useCartContext();

  return (
    <>
      <Head>
        <title>Test Shop</title>
        <meta name="description" content="Test strapi next integration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="antialiased bg-yellow-200 min-h-screen">
        <div className="relative items-center justify-center ">
          <h1 className="text-center text-2xl font-bold p-8 bg-gray-800 text-yellow-400 ">
            Welcome to{" "}
            <span className="text-blue-500 uppercase italic  text-3xl">
              The Shop
            </span>
          </h1>
          <div className="text-center ">
            <Link href="/cart" passHref>
              <button className=" mt-8 hover:bg-indigo-700 rounded-full py-2 px-4 font-semibold hover:text-white bg-indigo-500 text-gray-100 shadow-xl mr-4">
                Go to cart
              </button>
            </Link>
            <button
              className=" mt-8 hover:bg-indigo-700 rounded-full py-2 px-4 font-semibold hover:text-white bg-indigo-500 text-gray-100 shadow-xl"
              onClick={clearCart}
            >
              Clear orders
            </button>
          </div>
          {/* CARD CONTAINER */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-8">
            {products &&
              products.map((product: any) => {
                const { priceId, price, imageUrl, description, title } =
                  product;
                return (
                  <div
                    key={priceId}
                    className="shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12  overflow-hidden relative transform transition duration-500 ease-in-out lg:hover:-translate-y-1.5 hover:scale-105"
                  >
                    {/* CARD IMAGE */}
                    <Image
                      src={imageUrl}
                      alt="Random unsplash photo"
                      objectFit="cover"
                      width={1000}
                      height={750}
                    />

                    {/* CARD CONTENT */}
                    <div className="p-4">
                      <h3 className="font-medium text-gray-600 text-lg my-2 uppercase">
                        {title}
                      </h3>
                      <p className="absolute right-4 top-2 font-bold text-white text-3xl">
                        $ {(price / 100).toFixed(2)}
                      </p>
                      <p className="text-justify capitalize">{description}</p>
                      <div className="mt-5">
                        <button
                          onClick={() => {
                            updateCart(priceId);
                          }}
                          className="hover:bg-indigo-700 rounded-full py-2 px-4 font-semibold hover:text-white bg-indigo-500 text-gray-100 shadow-xl"
                        >
                          Buy now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* FOOTER */}
          <div className="mt-10 bottom-0 text-center">
            <h4 className="text-sm font-semibold text-gray-600 ">
              &copy; 2021
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
