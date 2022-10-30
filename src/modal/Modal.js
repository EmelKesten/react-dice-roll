import "./Modal.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";

function ModalContainer() {
  const { player0, player1 } = useSelector((state) => state?.player?.appData);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    if (player0.isWinner || player1.isWinner) {
      setModalIsOpen(true);
    }
  }, [player0.isWinner, player1.isWinner]);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
      >
        <div className="modal">
          <h2>Winner Is</h2>
          <h1>{player0.isWinner ? player0.name : player1.name}</h1>
          <button onClick={() => window.location.reload()}>New Game</button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalContainer;
