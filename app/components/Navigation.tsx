import Image from "next/image";

export default function Navigation() {

return (
    <div className="navigation-container col-span-12">
        <div className="logo"></div>
        <ul className="navigation-links">
          <li>
            <a>
              <Image
                src="/img/home.svg"
                width={16}
                height={17}
                alt="Picture of the author"
              />
              Overview
            </a>
          </li>
          <li className="active">
            <a>
              <Image
                src="/img/group.svg"
                width={24}
                height={17}
                alt="Picture of the author"
              />
              Patients
            </a>
          </li>
          <li>
            <a>
              <Image
                src="/img/calendar_today.svg"
                width={15}
                height={17}
                alt="Picture of the author"
              />
              Schedule
            </a>
          </li>
          <li>
            <a>
              <Image
                src="/img/chat_bubble.svg"
                width={19}
                height={17}
                alt="Picture of the author"
              />
              Message
            </a>
          </li>
          <li>
            <a>
              <Image
                src="/img/credit_card.svg"
                width={22}
                height={17}
                alt="Picture of the author"
              />
              Transactions
            </a>
          </li>
        </ul>
        <div className="right-link">
          <div className="doctor-image">

          </div>
          <div className="label-container">
            <span>Dr. Jose Simmons</span>
            <span>General Practicioner</span>
          </div>
          <div className="divider"></div>
          <button>
            <Image
              src="/img/settings.png"
              width={19}
              height={20}
              alt="Picture of the author"
            />
          </button>
          <button>
            <Image
              src="/img/more_vert.png"
              width={4}
              height={18}
              alt="Picture of the author"
            />
          </button>
        </div>
      </div>
)
}