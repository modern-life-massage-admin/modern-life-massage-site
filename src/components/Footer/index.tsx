import * as React from "react";

import { WordMark } from "../../utils/logo";

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div>
        <svg
          width="261"
          height="89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 27.226L4.5.766h6.81l5.302 14.125L21.885.765h6.81l4.5 26.484h-6.887l-2.296-15.243-6.252 15.243h-2.693l-5.93-15.243L6.84 27.249 0 27.226zM37.403 13.988a13.85 13.85 0 011.094-5.502 13.582 13.582 0 013.015-4.438 13.988 13.988 0 014.591-2.97 16.834 16.834 0 0111.815 0 14.08 14.08 0 014.66 2.97 13.529 13.529 0 013.06 4.438 14.454 14.454 0 010 10.996 13.562 13.562 0 01-3.06 4.446 13.944 13.944 0 01-4.66 2.96 16.835 16.835 0 01-11.815 0 13.852 13.852 0 01-4.591-2.96 13.614 13.614 0 01-3.015-4.446 13.774 13.774 0 01-1.094-5.494zm7.2 0a7.093 7.093 0 00.597 2.915c.387.861.935 1.64 1.615 2.296a7.23 7.23 0 002.372 1.53 7.651 7.651 0 008.119-1.53 7.191 7.191 0 001.63-2.296 7.423 7.423 0 000-5.83 7.222 7.222 0 00-1.63-2.296 7.736 7.736 0 00-8.12-1.53 7.292 7.292 0 00-3.986 3.825 7.048 7.048 0 00-.597 2.916zM72.143.765h10.184a12.021 12.021 0 015.05 1.071 13.935 13.935 0 014.148 2.893 13.558 13.558 0 012.793 4.216 13.093 13.093 0 010 10.047 13.36 13.36 0 01-2.778 4.232 13.635 13.635 0 01-4.147 2.915 12.052 12.052 0 01-5.104 1.087H72.143V.766zm6.886 20.66h1.584a8.579 8.579 0 003.199-.558 6.886 6.886 0 002.364-1.53 6.664 6.664 0 001.477-2.296c.347-.951.521-1.957.513-2.969a8.163 8.163 0 00-.528-2.954 6.78 6.78 0 00-1.53-2.349 6.886 6.886 0 00-2.373-1.53 8.417 8.417 0 00-3.16-.566h-1.584l.038 14.752zM115.866 6.573h-8.188v4.43h7.729v5.831h-7.729v4.591h8.188v5.831h-15.067V.766h15.067v5.807zM143.895 27.226h-8.57l-6.573-10.185v10.185h-6.887V.766h10.713c1.304-.02 2.601.2 3.826.65a7.29 7.29 0 014.331 4.376 8.938 8.938 0 01.543 3.16 7.763 7.763 0 01-1.454 4.898 7.338 7.338 0 01-4.239 2.525l8.31 10.85zM128.752 12.58h1.301a4.993 4.993 0 003.129-.842 3.244 3.244 0 001.086-2.426 3.245 3.245 0 00-1.086-2.426 5.048 5.048 0 00-3.129-.841h-1.301v6.535zM147.828 27.226V.766h6.887l12.718 16.19V.767h6.848v26.483h-6.848l-12.718-16.215v16.192h-6.887z"
            fill="#fff"
          />
          <path
            d="M189.279 0v23.989h8.218v3.964h-12.434V0h4.216zM210.169 0v27.953h-4.186V0h4.186zM235.29 3.979h-9.741v6.734h9.397v3.964h-9.397v13.306h-4.216V0h13.957v3.979zM260.052 3.979h-11.218v6.734h10.874v3.964h-10.874v9.343h11.203v3.963h-15.411V0h15.426v3.979z"
            fill="#fff"
            fill-opacity=".7"
          />
          <path
            d="M0 53.502h3.69l3.298 9.032c.406 1.173.738 2.413 1.181 3.623h.118c.406-1.21.738-2.45 1.159-3.623l3.202-9.032h3.69V71.95h-3.004v-8.427c0-1.705.259-4.162.414-5.904h-.118l-1.476 4.295-3.04 8.302H7.165L4.11 61.944l-1.476-4.295h-.073c.155 1.712.413 4.169.413 5.903v8.457H.022L0 53.5zM21.157 68.253c0-2.952 2.464-4.524 8.161-5.129-.044-1.476-.65-2.738-2.524-2.738-1.399.09-2.746.563-3.896 1.365l-1.195-2.17a10.804 10.804 0 015.69-1.814c3.475 0 5.165 2.132 5.165 5.999v8.213h-2.671l-.244-1.535h-.096a6.686 6.686 0 01-4.302 1.875 3.89 3.89 0 01-4.088-4.066zm8.161 0v-3.114c-3.763.472-5.018 1.476-5.018 2.855 0 1.225.834 1.764 2 1.764s1.985-.546 3.018-1.498v-.007zM36.24 70.385l1.513-2.066a6.14 6.14 0 003.83 1.55c1.52 0 2.214-.738 2.214-1.668 0-1.158-1.476-1.682-2.952-2.214-1.823-.686-3.896-1.734-3.896-4.044 0-2.31 1.94-4.147 5.047-4.147a7.46 7.46 0 014.612 1.66l-1.476 2a5.166 5.166 0 00-3.04-1.21c-1.395 0-2.059.664-2.059 1.535 0 1.1 1.402 1.513 2.907 2.066 1.875.701 3.978 1.609 3.978 4.2 0 2.383-1.89 4.301-5.394 4.301a8.664 8.664 0 01-5.284-1.963zM49.552 70.385l1.476-2.066a6.146 6.146 0 003.838 1.55c1.476 0 2.213-.738 2.213-1.668 0-1.158-1.476-1.682-2.951-2.214-1.823-.686-3.897-1.734-3.897-4.044 0-2.31 1.941-4.147 5.048-4.147a7.46 7.46 0 014.612 1.66l-1.476 2a5.166 5.166 0 00-3.04-1.21c-1.395 0-2.06.664-2.06 1.535 0 1.1 1.403 1.513 2.908 2.066 1.875.701 3.978 1.609 3.978 4.2 0 2.383-1.89 4.301-5.394 4.301a8.664 8.664 0 01-5.255-1.963zM63.5 68.253c0-2.952 2.464-4.524 8.161-5.129-.044-1.476-.65-2.738-2.524-2.738-1.399.09-2.747.562-3.896 1.365l-1.195-2.17a10.804 10.804 0 015.69-1.814c3.475 0 5.165 2.132 5.165 5.999v8.213h-2.664l-.251-1.535h-.06a6.686 6.686 0 01-4.301 1.875 3.888 3.888 0 01-4.125-4.066zm8.161 0v-3.114c-3.763.472-5.018 1.476-5.018 2.855 0 1.225.834 1.764 2 1.764s1.985-.546 3.018-1.498v-.007zM79.01 74.496c0-1.166.739-2.214 2-2.952v-.11a2.643 2.643 0 01-1.254-2.318 3.371 3.371 0 011.543-2.59v-.11a4.612 4.612 0 01-1.838-3.69c0-3.188 2.583-4.981 5.483-4.981a6.37 6.37 0 012.059.332h4.959v2.42H89.43a3.69 3.69 0 01.79 2.332c0 3.084-2.34 4.73-5.276 4.73a5.254 5.254 0 01-1.874-.369 1.601 1.601 0 00-.68 1.336c0 .738.569 1.247 2.214 1.247h2.465c3.32 0 5.084 1.033 5.084 3.424 0 2.738-2.87 4.892-7.379 4.892-3.298.023-5.763-1.158-5.763-3.593zm10.037-.738c0-1.07-.864-1.388-2.45-1.388h-1.904a7.668 7.668 0 01-1.874-.192 2.302 2.302 0 00-1.07 1.83c0 1.27 1.357 2 3.534 2 2.177 0 3.764-1.033 3.764-2.258v.008zM87.35 62.755c0-1.742-1.048-2.738-2.406-2.738s-2.406.99-2.406 2.738c0 1.749 1.07 2.79 2.406 2.79 1.335 0 2.406-1.034 2.406-2.797v.007zM94.426 65.05c0-4.509 3.13-7.283 6.391-7.283 3.756 0 5.734 2.708 5.734 6.582a8.444 8.444 0 01-.141 1.587H97.6c.273 2.464 1.852 3.859 4.088 3.859a5.903 5.903 0 003.224-1.004l1.107 2.022a8.609 8.609 0 01-4.759 1.476c-3.83.03-6.834-2.664-6.834-7.239zm9.306-1.328c0-2.14-.945-3.439-2.849-3.439-1.608 0-3.033 1.21-3.32 3.439h6.169zM121.597 56.261h-5.335v-2.76h13.962v2.76h-5.328V71.98h-3.276l-.023-15.718zM134.15 52.026h3.254v5.165l-.14 2.671c1.166-1.092 2.546-2.095 4.427-2.095 2.952 0 4.273 2.007 4.273 5.512v8.7h-3.254v-8.287c0-2.28-.657-3.136-2.162-3.136-1.218 0-2.022.598-3.159 1.727v9.697h-3.254l.015-19.954zM150.148 65.05c0-4.509 3.129-7.283 6.398-7.283 3.749 0 5.726 2.708 5.726 6.582a8.443 8.443 0 01-.14 1.587h-8.818c.265 2.464 1.852 3.859 4.088 3.859a5.902 5.902 0 003.217-1.004l1.107 2.022a8.61 8.61 0 01-4.752 1.476c-3.83.03-6.826-2.664-6.826-7.239zm9.313-1.328c0-2.14-.952-3.439-2.849-3.439-1.616 0-3.04 1.21-3.32 3.439h6.169zM166.515 58.099h2.664l.251 2.48h.089c.989-1.809 2.457-2.812 3.94-2.812a3.55 3.55 0 011.572.28l-.561 2.826a4.57 4.57 0 00-1.424-.228c-1.107 0-2.442.738-3.276 2.87v8.464h-3.255V58.1zM176.714 68.253c0-2.952 2.465-4.524 8.161-5.129-.051-1.476-.649-2.738-2.523-2.738a7.688 7.688 0 00-3.904 1.365l-1.195-2.17a10.845 10.845 0 015.696-1.814c3.469 0 5.166 2.132 5.166 5.999v8.213h-2.664l-.251-1.535h-.088a6.688 6.688 0 01-4.303 1.875 3.886 3.886 0 01-3.835-2.474 3.884 3.884 0 01-.26-1.592zm8.161 0v-3.114c-3.763.472-5.025 1.476-5.025 2.855 0 1.225.841 1.764 2.007 1.764 1.166 0 1.978-.546 3.011-1.498l.007-.007zM193.17 58.099h2.664l.243 1.476h.096a6.71 6.71 0 014.177-1.816c3.468 0 5.461 2.775 5.461 7.062 0 4.745-2.834 7.49-5.904 7.49a5.533 5.533 0 01-3.571-1.527l.103 2.302v4.376h-3.269V58.1zm9.298 6.76c0-2.768-.908-4.428-3.018-4.428-1.004 0-1.956.509-3.026 1.557v6.464a4.288 4.288 0 002.775 1.151c1.867.022 3.269-1.601 3.269-4.745zM209.183 77.388l.598-2.516c.322.109.657.173.996.192 1.476 0 2.302-.996 2.767-2.383l.259-.871-5.454-13.711h3.299l2.391 6.804c.42 1.232.819 2.605 1.225 3.925h.11c.355-1.29.701-2.656 1.063-3.925l2.066-6.804h3.144l-5.018 14.515c-1.151 3.122-2.612 5.062-5.638 5.062a5.24 5.24 0 01-1.808-.288z"
            fill="#fff"
            fill-opacity=".8"
          />
          <path
            d="M233.033 55.132v21.135a.677.677 0 00.126.398v.067c0 .133.044.258.059.383.014.126.037.185.051.28l.067.296c0 .126.051.25.081.376.029.126 0 .133.052.192.044.177.096.347.147.517v.051a13.182 13.182 0 009.298 8.856h.059l.539.125h.118l.494.081h.163l.465.06h.398c.303 0 .598.051.886.051h.206a13.283 13.283 0 0013.239-13.231V57.796a.74.74 0 00-.701-.7 20.651 20.651 0 00-2.133.103v-6.981a3.484 3.484 0 00-5.527-2.82v-1.94a3.484 3.484 0 00-6.966 0v.738a3.446 3.446 0 00-2.088-.738 3.49 3.49 0 00-3.484 3.483v3.365a3.437 3.437 0 00-2.088-.701 3.49 3.49 0 00-3.461 3.527zm25.09 19.747a11.86 11.86 0 01-11.844 11.807h-1.107c-4.14-.487-6.302-4.198-6.302-6.058 0-4.25 3.306-5.697 6.804-7.224a18.325 18.325 0 005.077-2.878c1.041-.952 2.28-2.782 2.28-6.103v-.517c.059-3.335.628-4.656 2.952-5.099a.64.64 0 00.236-.044 13.595 13.595 0 011.897-.148l.007 16.264zm-19.504-19.747v7.21a.702.702 0 001.395 0V48.985a2.09 2.09 0 014.177-.066v8.198a.736.736 0 00.738.701.697.697 0 00.643-.433.7.7 0 00.05-.268V45.458a2.087 2.087 0 114.177 0v11.66a.71.71 0 00.177.54.701.701 0 001.218-.54v-7.166a2.086 2.086 0 012.248-1.688 2.09 2.09 0 011.892 2.08v7.216c-2.694.686-3.594 2.502-3.69 6.332v.509c0 2.819-.989 4.317-1.823 5.077a17.526 17.526 0 01-4.693 2.627c-3.579 1.564-7.638 3.343-7.638 8.5a6.36 6.36 0 00.997 3.16 11.8 11.8 0 01-3.793-6.48c0-.133-.045-.273-.074-.406v-.14l-.067-.48c-.053-.458-.08-.918-.081-1.38V55.132a2.087 2.087 0 013.565-1.476c.392.391.612.922.612 1.476h-.03z"
            fill="#fff"
            fill-opacity=".8"
            stroke="#fff"
            stroke-width="1.043"
            stroke-miterlimit="10"
          />
        </svg>
        <p>
          1716 Sharkey Way
          <br />
          Suite 200
          <br />
          Lexington, KY 40511-2096
        </p>
      </div>
      <div>
        <a href="#">
          <svg width="34" height="34" xmlns="http://www.w3.org/2000/svg">
            <title>Facebook Mark</title>
            <path d="M18.972 28.333V18.011h3.482l.518-4.042h-4v-2.574c0-1.166.325-1.965 1.999-1.965h2.12V5.827a28.132 28.132 0 00-3.106-.16c-3.078 0-5.192 1.879-5.192 5.329v2.966h-3.46v4.041h3.468v10.33h4.171z" />
          </svg>
        </a>
        <a href="#">
          <svg
            width="34"
            height="34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Instagram Mark</title>
            <path d="M16.997 11.185A5.807 5.807 0 0011.182 17a5.807 5.807 0 005.815 5.815A5.807 5.807 0 0022.812 17a5.807 5.807 0 00-5.815-5.815zm0 9.594A3.787 3.787 0 0113.217 17a3.787 3.787 0 013.78-3.78 3.787 3.787 0 013.78 3.78 3.787 3.787 0 01-3.78 3.78zM23.05 9.591c-.751 0-1.358.607-1.358 1.359 0 .75.607 1.358 1.358 1.358a1.355 1.355 0 001.255-1.878 1.357 1.357 0 00-1.255-.839zM28.332 17c0-1.565.014-3.116-.073-4.678-.088-1.815-.502-3.425-1.83-4.752-1.329-1.33-2.936-1.74-4.751-1.829-1.565-.088-3.116-.073-4.678-.073-1.565 0-3.116-.015-4.678.073-1.815.088-3.425.502-4.752 1.829-1.33 1.33-1.741 2.937-1.829 4.752-.088 1.565-.074 3.116-.074 4.678 0 1.562-.014 3.116.074 4.678.088 1.815.502 3.425 1.829 4.752 1.33 1.33 2.937 1.74 4.752 1.829 1.565.088 3.116.073 4.678.073 1.565 0 3.116.015 4.678-.073 1.815-.088 3.425-.502 4.752-1.829 1.33-1.33 1.74-2.937 1.829-4.752.09-1.562.073-3.113.073-4.678zm-2.495 6.686a3.604 3.604 0 01-.856 1.298c-.4.4-.783.65-1.299.856-1.49.593-5.032.46-6.685.46-1.653 0-5.197.133-6.688-.457a3.602 3.602 0 01-1.299-.856c-.4-.4-.65-.783-.856-1.299-.59-1.494-.457-5.035-.457-6.688 0-1.653-.133-5.197.457-6.688.207-.516.456-.902.856-1.299.4-.397.783-.65 1.299-.856 1.491-.59 5.035-.457 6.688-.457 1.653 0 5.197-.133 6.688.457.516.207.902.456 1.299.856.4.4.65.783.856 1.299.59 1.491.457 5.035.457 6.688 0 1.653.133 5.194-.46 6.686z" />
          </svg>
        </a>
        <a href="#">
          <svg
            width="34"
            height="34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Twitter Mark</title>
            <path d="M28.663 9.44c-.898.387-1.875.665-2.88.774a4.99 4.99 0 002.2-2.758 9.877 9.877 0 01-3.175 1.209 4.99 4.99 0 00-3.656-1.582 5.002 5.002 0 00-5.002 5.006c0 .387.047.774.123 1.147A14.217 14.217 0 015.958 7.999a4.968 4.968 0 00-.681 2.526c0 1.737.883 3.268 2.23 4.169a5.047 5.047 0 01-2.262-.637v.062a5.004 5.004 0 004.01 4.911c-.43.112-.873.17-1.317.17-.326 0-.634-.032-.945-.076a5.012 5.012 0 004.677 3.471 10.027 10.027 0 01-6.211 2.139c-.42 0-.807-.015-1.209-.062a14.166 14.166 0 007.684 2.245c9.2 0 14.235-7.623 14.235-14.239 0-.217 0-.434-.014-.651a10.776 10.776 0 002.508-2.588z" />
          </svg>
        </a>
        <a href="#">
          <svg
            width="34"
            height="34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>YouTube Mark</title>
            <path d="M31.767 8.24c-.34-1.57-1.341-2.808-2.613-3.227C26.85 4.25 17.61 4.25 17.61 4.25s-9.24 0-11.545.763C4.792 5.433 3.79 6.669 3.45 8.24c-.618 2.846-.618 8.786-.618 8.786s0 5.939.618 8.786c.34 1.57 1.341 2.755 2.613 3.175 2.304.763 11.545.763 11.545.763s9.24 0 11.545-.763c1.271-.42 2.273-1.605 2.613-3.175.617-2.847.617-8.786.617-8.786s0-5.94-.617-8.786zm-17.18 14.178V11.633l7.723 5.393-7.723 5.392z" />
          </svg>
        </a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>
        Site created by <a href="https://deannellis.me/">Dean Nellis</a>.
        Copyright © {new Date().getFullYear()} Modern Life Massage Therapy
      </p>
    </div>
  </footer>
);

export default Footer;