import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-md my-16 text-center">
        {/* Illustration */}
        <div className="mb-16 text-center">
          <Image
            src="contact.svg"
            alt="LegalX Logo"
            width={500}
            height={0}
            className="mb-4"
            priority
          />
        </div>

        {/* Content */}
        <div className="space-y-0">
          <h2 className="text-xl font-bold text-black mb-4">
            Hi, Let&apos;s help you today.
          </h2>

          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            Our support lines are always available from{" "}
            <span className="font-bold">
              Mon - Fri <br />
              (8am-5pm){" "}
            </span>
            to attend to your requests.
          </p>

          <div className="pt-4 space-y-3">
            <div>
              <p className="text-gray-500 text-sm">
                Tap the below number to call
              </p>
              <a
                href="tel:+2348029398817"
                className="text-[#b3872d] font-bold hover:text-[#b3872d] transition-colors"
              >
                +234 802 939 8817
              </a>
            </div>

            <div>
              <p className="text-gray-500  text-sm">Mail us at</p>
              <a
                href="mailto:hello@legalxapp.com"
                className="text-[#b3872d] font-bold hover:text-[#b3872d] transition-colors"
              >
                hello@legalxapp.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
