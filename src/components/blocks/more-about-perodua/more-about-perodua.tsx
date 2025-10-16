import Image from "next/image";

export default function MoreAboutPerodua() {
  return (
    <section className="more-about-perodua">
      <div className="more-about-perodua-wrap content-width">
        <div className="perodua">
          <div className="perodua-wrap">
            <div className="logo">
              <div className="logo-wrap">
                <Image
                  src="/img/more-about-perodua/logo.png"
                  alt="perodua-logo"
                  width={266}
                  height={179}
                  className="image"
                />
              </div>
            </div>
            <div className="content">
              <div className="content-wrap">
                <div className="desc">
                  <span className="text body-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat omnis repellat, eum ea neque facere, cum earum quibusdam nulla ad sequi minus quia optio natus ducimus esse incidunt non.
                  Deleniti cumque magnam vel inventore autem expedita et explicabo saepe fugiat incidunt architecto deserunt omnis totam doloremque eligendi, tempora esse temporibus qui sequi assumenda provident molestiae repellat dolore! Officiis, facilis?</span>
                </div>
                <div className="desc">
                  <span className="text body-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat omnis repellat, eum ea neque facere, cum earum quibusdam nulla ad sequi minus quia optio natus ducimus esse incidunt non.
                  Deleniti cumque magnam vel inventore autem expedita et explicabo saepe fugiat incidunt architecto deserunt omnis totam doloremque eligendi, tempora esse temporibus qui sequi assumenda provident molestiae repellat dolore! Officiis, facilis?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}