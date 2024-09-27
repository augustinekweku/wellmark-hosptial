import Script from "next/script";

const CustomScript = () => {
  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        type="text/javascript"
      ></Script>
      <Script src="/assets/js/bootstrap.min.js" type="text/javascript"></Script>
      <Script
        src="/assets/js/jquery.fancybox.min.js"
        type="text/javascript"
      ></Script>
    </>
  );
};

export default CustomScript;
