import { useEffect, useState } from "react";
import * as S from "./styles";
import { IAccordionProps } from "./types";
import { ReactSVG } from "react-svg";
import ArrowDown from "../../../assets/icons/arrowDown.svg";
import ArrowTop from "../../../assets/icons/arrowTop.svg";
import { IcoinProps } from "../../../context/types";
import { useAuth } from "../../../context/Auth";

export const Accordion = ({ items, keepOthersOpen }: IAccordionProps) => {
  const [accordionItems, setAccordionItems] = useState<IcoinProps[]>([]);
  const { formatChange, formatCoint, formatName } = useAuth();

  useEffect(() => {
    if (items) {
      setAccordionItems([
        ...items.map((item: IcoinProps) => ({
          ...item,
          toggled: false,
        })),
      ]);
    }
  }, [items]);

  function handleAccordionToggle(clickedItem: IcoinProps) {
    setAccordionItems([
      ...accordionItems.map((item: IcoinProps) => {
        let toggled = item.toggled;

        if (clickedItem.rank === item.rank) {
          toggled = !item.toggled;
        } else if (!keepOthersOpen) {
          toggled = false;
        }

        return {
          ...item,
          toggled,
        };
      }),
    ]);
  }

  return (
    <S.Wrapper className="accordion-parent">
      <div className="header-accordion">
        <span>Crypto</span>
        <span>Actions</span>
      </div>

      {accordionItems?.map((coin, key) => {
        return (
          <div className={`accordion ${coin.toggled ? "toggled" : ""}`} key={key}>
            <button className="toggle" onClick={() => handleAccordionToggle(coin)}>
              <div className="coin">
                <img src={coin.icon} alt="Coin Name" />
                <p>{formatName(coin.name)}</p>
              </div>

              <div className="direction-indicator">
                {coin.toggled ? <ReactSVG src={ArrowTop} /> : <ReactSVG src={ArrowDown} />}
              </div>
            </button>
            <div className="content-parent">
              <div className="content">
                <div className="row">
                  <p>Price</p>
                  <b>US{formatCoint(coin.price)}</b>
                </div>

                <div className="row">
                  <p>Change</p>
                  <b className={coin.change > 0 ? "gain-color" : "loss-color"}>
                    {formatChange(coin.change)} %
                  </b>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </S.Wrapper>
  );
};
