const KeyButtons = (props) => {
  const btnData = [
    { keyTag: 'AC' },
    { keyTag: '+/-' },
    { keyTag: '%' },
    { className: 'btn-org', keyTag: '÷' },
    { keyTag: '7' },
    { keyTag: '8' },
    { keyTag: '9' },
    { className: 'btn-org', keyTag: 'x' },
    { keyTag: '4' },
    { keyTag: '5' },
    { keyTag: '6' },
    { className: 'btn-org', keyTag: '-' },
    { keyTag: '1' },
    { keyTag: '2' },
    { keyTag: '3' },
    { className: 'btn-org', keyTag: '+' },
    { className: 'btn-zero', keyTag: '0' },
    { keyTag: '.' },
    { className: 'btn-org', keyTag: '=' },
  ];

  return (
    btnData.map((btn) => <button type="button" onClick={() => props.onClickOperation(btn)} key={btn.keyTag} className={`input-btn ${btn.className}`}>{btn.keyTag}</button>)
  );
};

export default KeyButtons;
