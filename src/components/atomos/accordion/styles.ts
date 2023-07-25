import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  .header-accordion {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;

    span {
      color: ${({ theme }) => theme.secondary[500]};
      font-size: 12px;
    }
  }

  .accordion {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .accordion .coin {
    display: flex;
    align-items: center;
    gap: 8px;

    > img,
    svg,
    svg {
      width: 32px;
      height: 24px;
    }

    p {
      display: inline-block;
      font-size: 12px;
      color: ${({ theme }) => theme.secondary[500]};
    }
  }

  .accordion .toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    padding: 21px 16px;
    fill: black;
    color: black;
    transition:
      color 0.15s ease,
      fill 0.15 ease;
    font-weight: 600;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  .accordion .toggle:hover {
    color: #6d6d6d;
    fill: #6d6d6d;
  }

  .accordion:first-child .toggle {
    border-bottom: 0;
  }

  .accordion .toggle .direction-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    font-weight: 600;
  }

  .accordion .content-parent {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.15s ease-out;
    color: black;
    border-bottom: 1px solid #f4f3f8;
  }

  .accordion .content-parent .content .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    p {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      color: ${({ theme }) => theme.secondary[500]};
    }

    b {
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      color: ${({ theme }) => theme.secondary[500]};
    }

    .price-gain {
      color: ${({ theme }) => theme.Tertiary[700]};
    }
  }

  .accordion.toggled .content-parent {
    max-height: 500px;
    transition: max-height 0.25s ease-in;
    border-top: 1px solid #f4f3f8;
  }

  .accordion .content {
    padding: 10px 15px;
  }
`;
