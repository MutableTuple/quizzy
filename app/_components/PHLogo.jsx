import React from "react";

export default function PHLogo() {
  return (
    <div className="flex items-center justify-center my-4">
      <a
        href="https://www.producthunt.com/posts/quizzy?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-quizzy"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=480542&theme=light"
          alt="Quizzy - Sharpen&#0032;your&#0032;brain&#0032;by&#0032;solving&#0032;daily&#0032;problems&#0046; | Product Hunt"
          style={{ width: 250, height: 54 }}
          width="250"
          height="54"
        />
      </a>
    </div>
  );
}
