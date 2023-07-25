import { useEffect, useState } from "react";
import * as S from "./styles";
import { IAccordionProps, IItem } from "./types";
import { ReactSVG } from "react-svg";
import ArrowDown from "../../../assets/icons/arrowDown.svg";
import ArrowTop from "../../../assets/icons/arrowTop.svg";
import Bit from "../../../assets/icons/bitcoin.svg";

export const Accordion = ({ items, keepOthersOpen }: IAccordionProps) => {
  const [accordionItems, setAccordionItems] = useState<IItem[]>([]);

  useEffect(() => {
    if (items) {
      setAccordionItems([
        ...items.map((item: IItem) => ({
          ...item,
          toggled: false,
        })),
      ]);
    }
  }, [items]);

  function handleAccordionToggle(clickedItem: IItem) {
    setAccordionItems([
      ...accordionItems.map((item: IItem) => {
        let toggled = item.toggled;

        if (clickedItem.id === item.id) {
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
                <ReactSVG src={Bit} />
                <p>{coin.label}</p>
              </div>

              <div className="direction-indicator">
                {coin.toggled ? <ReactSVG src={ArrowTop} /> : <ReactSVG src={ArrowDown} />}
              </div>
            </button>
            <div className="content-parent">
              <div className="content">
                <div className="row">
                  <p>Price</p>
                  <b>{coin.price}</b>
                </div>

                <div className="row">
                  <p>Change</p>
                  <b className="price-gain">{coin.change}</b>
                </div>
                {/* {listItem.renderContent()} */}
              </div>
            </div>
          </div>
        );
      })}
    </S.Wrapper>
  );
};
