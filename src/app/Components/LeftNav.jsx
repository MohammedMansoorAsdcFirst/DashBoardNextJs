import React from "react";
import '@fontsource/inter';
import '@fontsource/poppins';

function LeftNav() {
  return (
    <>
      <div className="w-[296px] h-[1024px] bg-white flex flex-col items-center overflow-hidden gap-16">

        <div className="flex items-center gap-[10px] mt-2 font-Poppins mr-14 cursor-pointer">

          <div>
            <span>
              <svg
                width="50.49"
                height="50.49"
                viewBox="0 0 51 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.755115 27.7962C1.26977 24.5323 2.65935 21.4655 4.98818 19.0101C5.19404 18.7932 5.33557 18.4974 5.81163 18.4481C5.03964 22.6488 7.3556 26.1199 9.91602 29.6402C10.3535 29.0683 10.1734 28.5161 10.3149 28.0033C11.0869 24.9859 13.0297 22.3727 15.0111 19.7596C17.147 16.9492 19.553 14.2473 20.8268 11.1017C22.2035 7.69964 22.2549 4.3765 19.6045 1.2703C19.4887 1.14211 19.2828 0.984337 19.4501 0.846283C19.7331 0.639204 20.0419 0.836422 20.3121 0.925171C24.9955 2.37473 29.3444 4.24831 33.0885 6.89104C37.5403 10.0367 40.4224 13.8233 41.2587 18.4678C41.5675 20.1639 41.4645 21.8599 41.1429 23.6941C43.4974 21.5641 44.4624 19.1975 44.501 16.397C46.4953 18.3297 47.9492 20.2526 49.0557 22.3431C53.6105 30.9419 49.9178 41.4043 40.5382 47.2321C31.4159 52.8923 17.3657 52.4979 8.64225 46.4728C1.92596 41.8185 -0.287067 34.4819 0.755115 27.7962Z"
                  fill="#FF6161"
                />
                <path
                  d="M49.0558 22.3236C47.9493 20.243 46.4954 18.3102 44.5011 16.3775C44.4625 19.1681 43.4975 21.5446 41.143 23.6746C41.4646 21.8404 41.5676 20.1443 41.2588 18.4483C40.4353 13.8038 37.5404 10.0172 33.0886 6.87152C30.3352 4.92892 27.2472 3.40047 23.9406 2.14813V51.1964C29.8462 51.4331 35.842 50.1216 40.5254 47.2126C49.9179 41.3947 53.6106 30.9223 49.0558 22.3236Z"
                  fill="#E54141"
                />
                <path
                  d="M23.8635 51.1961C19.862 51.1961 15.8734 50.2396 12.7469 48.2773C10.0706 46.6009 8.20501 44.323 7.22716 41.7888C6.35224 39.5503 6.10778 37.0555 6.49377 34.5706C6.6739 33.3873 7.02129 32.2631 7.51022 31.2277C7.87048 30.4783 8.30794 29.7683 8.80973 29.1273C8.84833 30.0937 9.09279 31.0699 9.54312 32.0955C10.1607 33.5056 11.1 34.8467 12.0135 36.099C12.1807 36.3357 12.3351 36.5921 12.5667 36.7696C13.403 36.2469 13.3259 35.4581 13.5188 34.7382C14.7026 30.143 19.4245 26.7903 21.2258 22.3726C22.2938 19.7397 22.1651 17.4816 20.8141 15.4798C26.8228 17.452 32.484 20.9625 34.414 25.9225C35.3532 28.3089 34.9929 30.6854 34.5684 33.1013L36.0094 31.7996C37.399 30.5473 38.2096 29.1569 38.5055 27.5101C38.8014 27.8356 39.0716 28.1807 39.3289 28.516C42.5584 32.7364 42.8929 38.3177 40.5513 42.8439C38.3511 47.094 33.0244 50.1509 27.2087 50.9496C26.1151 51.1172 24.9957 51.1961 23.8635 51.1961Z"
                  fill="#FEBD55"
                />
                <path
                  d="M39.342 28.5257C39.0847 28.1904 38.8016 27.8551 38.5185 27.5198C38.2226 29.1666 37.412 30.557 36.0225 31.8093L34.5814 33.111C35.006 30.6852 35.3663 28.3186 34.427 25.9322C32.8573 21.9287 28.8558 18.8619 24.2111 16.7911V51.1861C25.2275 51.1762 26.2311 51.0973 27.2218 50.9593C33.0374 50.1606 38.3641 47.1037 40.5643 42.8536C42.8931 38.3373 42.5715 32.756 39.342 28.5257Z"
                  fill="#FF9522"
                />
                <path
                  d="M20.1709 40.5564C22.2552 40.5564 23.9536 39.2548 23.9536 37.6573C23.9536 36.0599 22.2552 34.7582 20.1709 34.7582C18.0865 34.7582 16.3881 36.0599 16.3881 37.6573C16.3881 39.2548 18.0865 40.5564 20.1709 40.5564ZM20.1709 36.2472C21.1873 36.2472 22.0236 36.8783 22.0236 37.6672C22.0236 38.4462 21.2002 39.0872 20.1709 39.0872C19.1544 39.0872 18.3181 38.4561 18.3181 37.6672C18.331 36.8783 19.1544 36.2472 20.1709 36.2472Z"
                  fill="#393F59"
                />
                <path
                  d="M31.0166 35.5075C31.0166 35.2906 30.9008 35.0835 30.6692 34.9356C30.2575 34.6792 29.6528 34.7186 29.3054 35.0342L17.6098 45.9207C17.4683 46.0587 17.3911 46.2263 17.3911 46.394C17.3911 46.6109 17.5068 46.818 17.7384 46.9659C17.9186 47.0744 18.1373 47.1335 18.356 47.1335C18.6391 47.1335 18.9093 47.0448 19.1023 46.8673L30.7979 35.9808C30.9523 35.8329 31.0166 35.6653 31.0166 35.5075Z"
                  fill="#393F59"
                />
                <path
                  d="M28.225 41.3357C26.1406 41.3357 24.4423 42.6373 24.4423 44.2348C24.4423 45.8323 26.1406 47.1339 28.225 47.1339C30.3094 47.1339 32.0077 45.8323 32.0077 44.2348C32.0077 42.6373 30.3094 41.3357 28.225 41.3357ZM28.225 45.6449C27.2085 45.6449 26.3722 45.0138 26.3722 44.2249C26.3722 43.436 27.1957 42.8049 28.225 42.8049C29.2543 42.8049 30.0778 43.436 30.0778 44.2249C30.0778 45.0138 29.2414 45.6449 28.225 45.6449Z"
                  fill="#393F59"
                />
                <path
                  d="M31.017 35.5075C31.017 35.2906 30.9012 35.0835 30.6696 34.9356C30.2579 34.6792 29.6532 34.7186 29.3058 35.0342L24.1978 39.7871V42.1143L30.7983 35.971C30.9527 35.8329 31.017 35.6653 31.017 35.5075Z"
                  fill="#23293F"
                />
                <path
                  d="M28.225 41.3358C26.1406 41.3358 24.4423 42.6374 24.4423 44.2349C24.4423 45.8323 26.1406 47.134 28.225 47.134C30.3094 47.134 32.0077 45.8323 32.0077 44.2349C31.9949 42.6374 30.3094 41.3358 28.225 41.3358ZM28.225 45.645C27.2085 45.645 26.3722 45.0139 26.3722 44.225C26.3722 43.446 27.1957 42.805 28.225 42.805C29.2414 42.805 30.0778 43.4361 30.0778 44.225C30.0649 45.0139 29.2414 45.645 28.225 45.645Z"
                  fill="#23293F"
                />
              </svg>
            </span>
          </div>

          <div className="font-Poppins text-[20px] font-bold">
            <p>Promo Agro</p>
          </div>
        </div>

        <div className="font-Inter flex flex-col gap-[24px] text-[14px]">

          <div className="flex w-[233px] items-start bg-darkBlue gap-[16px] px-[20px] py-[16px] rounded-[12px] cursor-pointer">

            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.5C3 3.87479 3.02811 3 6.5 3C9.97189 3 10 3.87479 10 6.5C10 9.12521 10.0111 10 6.5 10C2.98893 10 3 9.12521 3 6.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 6.5C14 3.87479 14.0281 3 17.5 3C20.9719 3 21 3.87479 21 6.5C21 9.12521 21.0111 10 17.5 10C13.9889 10 14 9.12521 14 6.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 17.5C3 14.8748 3.02811 14 6.5 14C9.97189 14 10 14.8748 10 17.5C10 20.1252 10.0111 21 6.5 21C2.98893 21 3 20.1252 3 17.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 17.5C14 14.8748 14.0281 14 17.5 14C20.9719 14 21 14.8748 21 17.5C21 20.1252 21.0111 21 17.5 21C13.9889 21 14 20.1252 14 17.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            <div className="text-white">
              <p>Dashboard</p>
            </div>
          </div>

          <div className="flex gap-[16px] items-center pl-[20px] cursor-pointer">
            <div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.5C1 1.87479 1.02811 1 4.5 1C7.97189 1 8 1.87479 8 4.5C8 7.12521 8.01107 8 4.5 8C0.988927 8 1 7.12521 1 4.5Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C12 1.87479 12.0281 1 15.5 1C18.9719 1 19 1.87479 19 4.5C19 7.12521 19.0111 8 15.5 8C11.9889 8 12 7.12521 12 4.5Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 15.5C1 12.8748 1.02811 12 4.5 12C7.97189 12 8 12.8748 8 15.5C8 18.1252 8.01107 19 4.5 19C0.988927 19 1 18.1252 1 15.5Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.5C12 12.8748 12.0281 12 15.5 12C18.9719 12 19 12.8748 19 15.5C19 18.1252 19.0111 19 15.5 19C11.9889 19 12 18.1252 12 15.5Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            <div className="text-superBlack">
              <p>My Inventory</p>
            </div>
          </div>

          <div className="flex gap-[16px] items-center pl-[20px] cursor-pointer">
            <div>
              <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5137 20.5H6.16592C3.09955 20.5 0.747152 19.3925 1.41534 14.9348L2.19338 8.8936C2.60528 6.66934 4.02404 5.81808 5.26889 5.81808H15.4474C16.7105 5.81808 18.0469 6.73342 18.5229 8.8936L19.3009 14.9348C19.8684 18.889 17.5801 20.5 14.5137 20.5Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.651 5.5984C14.651 3.21233 12.7167 1.27804 10.3307 1.27804V1.27804C9.18168 1.27317 8.07807 1.7262 7.26388 2.53695C6.44969 3.34771 5.99199 4.44939 5.992 5.5984H5.992" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.2963 10.1018H13.2506" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.46572 10.1018H7.41995" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            <div className="text-superBlack">
              <p>Orders</p>
            </div>

            <div className="w-[24px] h-[22px] bg-lightOrange flex justify-center items-center text-[12px] text-darkBlack rounded-[500px] pt-[4px] pr-[8px] pb-[5px] pl-[8px]">
              <span>3</span>
            </div>
          </div>

          <div className="flex gap-[16px] items-center pl-[20px] cursor-pointer">
            <div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.59151 13.2068C11.2805 13.2068 14.4335 13.7658 14.4335 15.9988C14.4335 18.2318 11.3015 18.8068 7.59151 18.8068C3.90151 18.8068 0.749512 18.2528 0.749512 16.0188C0.749512 13.7848 3.88051 13.2068 7.59151 13.2068Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.59151 10.0198C5.16951 10.0198 3.20551 8.0568 3.20551 5.6348C3.20551 3.2128 5.16951 1.2498 7.59151 1.2498C10.0125 1.2498 11.9765 3.2128 11.9765 5.6348C11.9855 8.0478 10.0355 10.0108 7.62251 10.0198H7.59151Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.4831 8.8816C16.0841 8.6566 17.3171 7.2826 17.3201 5.6196C17.3201 3.9806 16.1251 2.6206 14.5581 2.3636" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.5954 12.7322C18.1464 12.9632 19.2294 13.5072 19.2294 14.6272C19.2294 15.3982 18.7194 15.8982 17.8954 16.2112" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            <div className="text-superBlack">
              <p>Customers</p>
            </div>
          </div>

          <div className="flex gap-[16px] items-center pl-[20px] cursor-pointer">
            <div>
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8067 6.62357L18.1842 5.54348C17.6577 4.62956 16.4907 4.31427 15.5755 4.83867V4.83867C15.1399 5.0953 14.6201 5.16811 14.1307 5.04104C13.6413 4.91398 13.2226 4.59747 12.9668 4.16133C12.8023 3.8841 12.7139 3.56835 12.7105 3.24599V3.24599C12.7254 2.72918 12.5304 2.22836 12.17 1.85762C11.8096 1.48689 11.3145 1.27782 10.7975 1.27803H9.5435C9.03697 1.27802 8.55131 1.47987 8.194 1.8389C7.83669 2.19793 7.63717 2.68455 7.63961 3.19107V3.19107C7.6246 4.23688 6.77248 5.07677 5.72657 5.07666C5.40421 5.07331 5.08846 4.9849 4.81123 4.82036V4.82036C3.89606 4.29597 2.72911 4.61125 2.20254 5.52517L1.53435 6.62357C1.00841 7.53635 1.3194 8.70256 2.23 9.23226V9.23226C2.8219 9.57399 3.18653 10.2055 3.18653 10.889C3.18653 11.5725 2.8219 12.204 2.23 12.5458V12.5458C1.32056 13.0719 1.00923 14.2353 1.53435 15.1453V15.1453L2.16593 16.2346C2.41265 16.6797 2.8266 17.0082 3.31619 17.1474C3.80578 17.2865 4.33064 17.2249 4.77462 16.976V16.976C5.21108 16.7213 5.73119 16.6515 6.21934 16.7822C6.70749 16.9128 7.12324 17.233 7.37416 17.6716C7.5387 17.9488 7.62711 18.2646 7.63046 18.587V18.587C7.63046 19.6435 8.48696 20.5 9.5435 20.5H10.7975C11.8505 20.5 12.7055 19.6491 12.7105 18.5961V18.5961C12.7081 18.088 12.9089 17.6 13.2682 17.2407C13.6275 16.8814 14.1155 16.6806 14.6236 16.6831C14.9452 16.6917 15.2596 16.7797 15.5389 16.9394V16.9394C16.4517 17.4653 17.6179 17.1543 18.1476 16.2437V16.2437L18.8067 15.1453C19.0618 14.7075 19.1318 14.186 19.0012 13.6963C18.8706 13.2067 18.5502 12.7893 18.111 12.5366V12.5366C17.6718 12.2839 17.3514 11.8665 17.2208 11.3769C17.0902 10.8873 17.1603 10.3658 17.4154 9.92792C17.5812 9.63829 17.8214 9.39815 18.111 9.23226V9.23226C19.0161 8.70285 19.3264 7.54345 18.8067 6.63272V6.63272V6.62357Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="10.1751" cy="10.889" r="2.63616" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            <div className="text-superBlack">
              <p>Settings</p>
            </div>
          </div>
        </div>

        <div className="flex w-[232px] gap-[10px] rounded-[16px] bg-lightBlack px-[16px] py-[11px] mt-64 cursor-pointer">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className="text-darkBlack">
            <span>Contact Support</span>
          </div>
        </div>

        <div className="p-[11px] gap-[10px] flex mr-[110px] text-lightRed mt-16 justify-center items-center cursor-pointer">
          <div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M2 6.447C2 3.996 4.03024 2 6.52453 2H11.4856C13.9748 2 16 3.99 16 6.437V17.553C16 20.005 13.9698 22 11.4744 22H6.51537C4.02515 22 2 20.01 2 17.563V16.623V6.447Z" fill="#CC5F5F" />
              <path d="M21.7789 11.4548L18.9331 8.5458C18.639 8.2458 18.1657 8.2458 17.8725 8.5478C17.5803 8.8498 17.5813 9.3368 17.8745 9.6368L19.4337 11.2298H17.9387H9.54844C9.13452 11.2298 8.79852 11.5748 8.79852 11.9998C8.79852 12.4258 9.13452 12.7698 9.54844 12.7698H19.4337L17.8745 14.3628C17.5813 14.6628 17.5803 15.1498 17.8725 15.4518C18.0196 15.6028 18.2114 15.6788 18.4043 15.6788C18.5952 15.6788 18.787 15.6028 18.9331 15.4538L21.7789 12.5458C21.9201 12.4008 22 12.2048 22 11.9998C22 11.7958 21.9201 11.5998 21.7789 11.4548Z" fill="#CC5F5F" />
            </svg>
          </div>
          <div>
            <span className="text-[14px]">Logout</span>
          </div>
        </div>

      </div>
    </>
  );
}

export default LeftNav;