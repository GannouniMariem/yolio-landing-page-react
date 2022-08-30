import './css/style.css';
import React from 'react';
import logo from './assets/images/logo.svg';
import video_img from './assets/images/video.jpg';
import '/node_modules/glightbox/dist/css/glightbox.min.css'
import video from './assets/demo.mp4'

import GLightbox from 'glightbox';

const lightbox = GLightbox({
'selector':'.glightbox',
  'href': video,
  'type': 'video',
  'source': 'youtube', //vimeo, youtube or local
  'width': 800,
  'autoplayVideos': true,
});

function App() {
  return (
    <React.Fragment>
    <main>
       <span className="bg-shape d-none d-lg-block">
          <svg width="100%" viewBox="0 0 1920 986" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.2788 165.83C14.7972 163.776 17.6423 160.743 19.4675 157.101C21.2927 153.459 22.0191 149.365 21.5581 145.317C21.0972 141.269 19.4689 137.443 16.8715 134.304C14.2742 131.166 10.8201 128.851 6.93003 127.641C3.03997 126.431 -1.11805 126.378 -5.03734 127.49C-8.95663 128.602 -12.468 130.829 -15.1435 133.901C-17.8189 136.974 -19.5431 140.758 -20.1058 144.792C-20.6684 148.827 -20.0454 152.939 -18.3125 156.626L-9.93185 152.687C-10.9006 150.626 -11.2489 148.327 -10.9344 146.071C-10.6198 143.816 -9.65595 141.7 -8.16024 139.983C-6.66453 138.265 -4.70155 137.02 -2.51051 136.399C-0.319465 135.777 2.00504 135.806 4.17974 136.483C6.35444 137.159 8.28545 138.454 9.73745 140.208C11.1895 141.963 12.0998 144.102 12.3574 146.365C12.6151 148.628 12.209 150.916 11.1887 152.953C10.1684 154.989 8.57781 156.684 6.61086 157.832L11.2788 165.83Z" fill="#0E0F19"/>
              <path d="M-11.2352 897.769C-14.7133 899.89 -17.4995 902.977 -19.254 906.654C-21.0086 910.331 -21.6559 914.438 -21.117 918.476C-20.578 922.515 -18.8762 926.309 -16.2188 929.397C-13.5615 932.484 -10.0633 934.733 -6.15063 935.867C-2.23795 937.002 1.9203 936.974 5.81741 935.787C9.71453 934.6 13.1822 932.305 15.798 929.182C18.4137 926.059 20.0645 922.242 20.5493 918.197C21.034 914.152 20.3318 910.054 18.5281 906.401L10.225 910.501C11.2333 912.543 11.6259 914.834 11.3549 917.095C11.0839 919.357 10.1611 921.49 8.69876 923.236C7.23645 924.982 5.29787 926.265 3.11922 926.929C0.940568 927.593 -1.38406 927.608 -3.57141 926.974C-5.75876 926.339 -7.71437 925.083 -9.19995 923.356C-10.6855 921.63 -11.6369 919.509 -11.9382 917.252C-12.2395 914.994 -11.8776 912.698 -10.8968 910.642C-9.91587 908.587 -8.35832 906.861 -6.41388 905.675L-11.2352 897.769Z" fill="#0E0F19"/>
              <path d="M1128.22 949.726C1124.14 949.824 1120.19 951.104 1116.83 953.411C1113.47 955.718 1110.86 958.951 1109.3 962.718C1107.75 966.484 1107.33 970.621 1108.09 974.624C1108.84 978.627 1110.75 982.323 1113.57 985.262C1116.39 988.201 1120.01 990.256 1123.97 991.177C1127.94 992.097 1132.09 991.843 1135.92 990.447C1139.75 989.05 1143.09 986.57 1145.53 983.309C1147.97 980.048 1149.41 976.148 1149.68 972.082L1140.43 971.482C1140.29 973.754 1139.48 975.935 1138.12 977.758C1136.75 979.58 1134.88 980.967 1132.75 981.748C1130.61 982.529 1128.29 982.671 1126.07 982.156C1123.85 981.641 1121.83 980.492 1120.25 978.849C1118.67 977.206 1117.61 975.14 1117.18 972.902C1116.76 970.665 1117 968.352 1117.87 966.246C1118.73 964.141 1120.19 962.333 1122.07 961.043C1123.95 959.754 1126.16 959.038 1128.44 958.983L1128.22 949.726Z" fill="#0E0F19"/>
              <path d="M965.607 48.8346C969.516 47.686 973.006 45.4254 975.652 42.3281C978.299 39.2308 979.987 35.4306 980.512 31.3906C981.036 27.3506 980.374 23.2453 978.607 19.5749C976.839 15.9044 974.042 12.8274 970.556 10.7187C967.071 8.60994 963.047 7.56063 958.975 7.69857C954.904 7.83652 950.96 9.15576 947.625 11.4956C944.29 13.8354 941.708 17.0947 940.193 20.8763C938.678 24.658 938.295 28.7987 939.092 32.7939L948.173 30.9827C947.728 28.7492 947.942 26.4344 948.789 24.3203C949.636 22.2062 951.079 20.3841 952.944 19.0761C954.808 17.768 957.013 17.0305 959.289 16.9534C961.565 16.8763 963.815 17.4629 965.763 18.6418C967.712 19.8206 969.276 21.5408 970.264 23.5927C971.252 25.6447 971.622 27.9397 971.329 30.1982C971.035 32.4567 970.092 34.5812 968.612 36.3127C967.133 38.0442 965.182 39.308 962.996 39.9501L965.607 48.8346Z" fill="#0E0F19"/>
              <path d="M1918.61 122.835C1922.52 121.686 1926.01 119.425 1928.65 116.328C1931.3 113.231 1932.99 109.431 1933.51 105.391C1934.04 101.351 1933.37 97.2453 1931.61 93.5749C1929.84 89.9044 1927.04 86.8274 1923.56 84.7187C1920.07 82.61 1916.05 81.5606 1911.98 81.6986C1907.9 81.8365 1903.96 83.1558 1900.63 85.4956C1897.29 87.8354 1894.71 91.0947 1893.19 94.8763C1891.68 98.658 1891.3 102.799 1892.09 106.794L1901.17 104.983C1900.73 102.749 1900.94 100.434 1901.79 98.3203C1902.64 96.2062 1904.08 94.3841 1905.94 93.0761C1907.81 91.7681 1910.01 91.0305 1912.29 90.9534C1914.57 90.8763 1916.81 91.4629 1918.76 92.6418C1920.71 93.8206 1922.28 95.5408 1923.26 97.5927C1924.25 99.6447 1924.62 101.94 1924.33 104.198C1924.04 106.457 1923.09 108.581 1921.61 110.313C1920.13 112.044 1918.18 113.308 1916 113.95L1918.61 122.835Z" fill="#0E0F19"/>
          </svg> 
       </span>


        <div className="container-fluid ">
            <div className="logo m-lg-5 p-2 p-lg-0">
                <img src={logo} alt=""/>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-12  pb-0">
                    <div className="text-section px-xl-5 ">
                        <p><span>yolio</span> <br/> will present</p>
                        <p>How to create your own portfolio?</p>
                        <p className="fw-bold mb-0"><i className="uil uil-circle"></i> Amine jbali</p>
                        <p className="fw-semibold"><i className="uil uil-circle"></i> Trainer & Full stack developer</p>
                        <p className="fs-6 fw-semibold text-muted ">Join Yolio family! Stay up to date the latest and greatest IT content <br className="d-block"/> and lots of inspiration.</p>
                        <form className="input my-5 d-flex justify-content-lg-start justify-content-center " id="form">
                            <input type="email" placeholder="your e-mail here" required/>
                            <button type="submit" className="btn signin" id="botton">
                                <span className="signin--front">sign in</span>
                                <span className="signin--back">thank you</span>
                                <div className="rainbow"></div>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 d-flex justify-content-lg-end">
                    <div className="video-box">
                        <img src={video_img} className="image-fluid" alt=""/>
                        
                        <a href={video} className="glightbox">
                          <span className="video-icon d-flex align-item--center justify-content-center">
                              <span>
                                <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27 16L-1.4682e-06 31.5885L-1.05412e-07 0.411542L27 16Z" fill="#D9D9D9"/>
                                </svg>
                                    <span className="border-animation border-animation--border-1 "></span>
                                    <span className="border-animation border-animation--border-2"></span>
                              </span>
                              
                          </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer className="container-fluid pt-2 mt-1">
        <div className="row ">
            <div className="col-lg-6 col-md-12 px-lg-5 text-center text-lg-start">
                <small className="  text-light">Copyright <i className="uil uil-copyright"></i>2022 . Made with 🤍 . Powered by Yolio</small>

            </div>
            <div className="col-lg-6 col-md-12 px-lg-5 d-flex justify-content-lg-end justify-content-center">
                <p className="text-light text-white"> Follow us:
                    <span >
                        <a href="https://www.facebook.com/official.yolio/?ref=pages_you_manage" target="_blank"><i className="uil uil-facebook text-white   mx-1 "></i></a>
                        <a href="https://www.instagram.com/yolio_official/"><i className="uil uil-instagram-alt  text-white mx-1"></i></a>
                        <a href=""><i className="uil uil-youtube  text-white  mx-1"></i></a>
                        <a href=""><i className="uil uil-linkedin-alt text-white  mx-1"></i></a>
                    </span>
                </p>
            </div>
            
        </div>
    </footer>

    </React.Fragment>
  );
}

export default App;
