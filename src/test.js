import React from "react";
import OverLayView from "./Components/OverLayView";

export default function Test() {
  return (
    <div>
      <div id="wrapper">
        <div className="sidebar">
          <div className="profile-img">
            <img src="http://muhammederdem.com.tr/imagesrdm/profile.jpg" />
          </div>

          <ul className="sidebar-menu">
            <li>
              <a href="#" className="sidebar-menu__links active">
                <img src="http://muhammederdem.com.tr/sms/img/inbox.png" />
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-menu__links">
                <img src="http://muhammederdem.com.tr/sms/img/send.png" />
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-menu__links">
                <img src="http://muhammederdem.com.tr/sms/img/draft.png" />
              </a>
            </li>
            <li>
              <a href="#" className="sidebar-menu__links">
                <img src="http://muhammederdem.com.tr/sms/img/trash.png" />
              </a>
            </li>
          </ul>

          <a href="#" className="btn-menu">
            <img src="img/menu.png" />
          </a>
        </div>

        <div className="messages">
          <div className="seacrh-bar">
            <img src="img/search.png" />
            <input type="text" placeholder="Search" />
          </div>

          <a href="#" className="messages__item">
            <div className="name">Muhammed ERDEM</div>
            <div className="date">1h ago</div>

            <div className="content">
              Currently We are looking for a UI designer to work on our websites
              and mobile application...
            </div>
          </a>

          <a href="#" className="messages__item unread">
            <div className="name">Muhammed ERDEM</div>
            <div className="date">1h ago</div>

            <div className="content">
              Currently We are looking for a UI designer to work on our websites
              and mobile application...
            </div>
          </a>

          <a href="#" className="messages__item">
            <div className="name">Muhammed ERDEM</div>
            <div className="date">1h ago</div>

            <div className="content">
              Currently We are looking for a UI designer to work on our websites
              and mobile application...
            </div>
          </a>

          <a href="#" className="messages__item">
            <div className="name">Muhammed ERDEM</div>
            <div className="date">1h ago</div>

            <div className="content">
              Currently We are looking for a UI designer to work on our websites
              and mobile application...
            </div>
          </a>

          <a href="#" className="messages__item active">
            <div className="name">Muhammed ERDEM</div>
            <div className="date">1h ago</div>

            <div className="content">
              Currently We are looking for a UI designer to work on our websites
              and mobile application...
            </div>
          </a>
        </div>

        <div className="message-content">
          <div className="message-content__item">
            <div className="message-content-header">
              <div className="name">Muhammed ERDEM</div>
              <div className="phone">+90 507 047 3099</div>
              <img src="img/message-more.png" />
            </div>
          </div>

          <div className="message-box">
            <div className="message-box__item incoming">
              <div className="name">Muhammed ERDEM</div>

              <div className="box-text">
                Hey man!
                <div className="time">18:36</div>
              </div>
            </div>

            <div className="message-box__item outgoing">
              <div className="box-text">
                Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                metinlerdir
                <div className="time">18:36</div>
              </div>
            </div>

            <div className="message-box__item outgoing">
              <div className="box-text">
                Currently We are looking for a UI designer to work on our
                websites and mobile application.
                <div className="time">18:36</div>
              </div>
            </div>

            <div className="message-box__item incoming">
              <div className="name">Muhammed ERDEM</div>

              <div className="box-text">
                Currently We are looking
                <div className="time">18:36</div>
              </div>
            </div>
          </div>

          <div className="message-form">
            <input type="text" placeholder="Type your message here" />
            <img src="img/submit.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
