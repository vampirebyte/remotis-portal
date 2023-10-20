import { useEffect, useState } from 'react';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { Button } from 'components/Button';
import { ContractAddress } from 'components/ContractAddress';
import { Label } from 'components/Label';
import { OutputContainer, PingPongOutput } from 'components/OutputContainer';
import { getCountdownSeconds, setTimeRemaining } from 'helpers';
import { useGetPendingTransactions, useSendPingPongTransaction } from 'hooks';
import { SessionEnum } from 'localConstants';
import { SignedTransactionType } from 'types';
import { useGetTimeToPong, useGetPingAmount } from './hooks';

// Raw transaction are being done by directly requesting to API instead of calling the smartcontract
export const PingPongRaw = (props: any) => {
  const getTimeToPong = useGetTimeToPong();
  const { hasPendingTransactions } = useGetPendingTransactions();
  const { sendPingTransaction, sendPongTransaction, transactionStatus } =
    useSendPingPongTransaction(SessionEnum.rawPingPongSessionId);
  const pingAmount = useGetPingAmount();

  const [stateTransactions, setStateTransactions] = useState<
    SignedTransactionType[] | null
  >(null);
  const [hasPing, setHasPing] = useState<boolean>(true);
  const [secondsLeft, setSecondsLeft] = useState<number>(0);

  const setSecondsRemaining = async () => {
    const secondsRemaining = await getTimeToPong();
    const { canPing, timeRemaining } = setTimeRemaining(secondsRemaining);

    setHasPing(canPing);
    if (timeRemaining && timeRemaining >= 0) {
      setSecondsLeft(timeRemaining);
    }
  };

  const onSendPingTransaction = async () => {
    await sendPingTransaction(pingAmount);
  };

  const onSendPongTransaction = async () => {
    await sendPongTransaction();
  };

  const timeRemaining = moment()
    .startOf('day')
    .seconds(secondsLeft ?? 0)
    .format('mm:ss');

  const pongAllowed = secondsLeft === 0;

  useEffect(() => {
    getCountdownSeconds({ secondsLeft, setSecondsLeft });
  }, [hasPing]);

  useEffect(() => {
    if (transactionStatus.transactions) {
      setStateTransactions(transactionStatus.transactions);
    }
  }, [transactionStatus]);

  useEffect(() => {
    setSecondsRemaining();
  }, [hasPendingTransactions]);

  return (
    <>
      <Button
        disabled={!pongAllowed || hasPing || hasPendingTransactions}
        data-testid='btnPongRaw'
        data-cy='transactionBtn'
        onClick={onSendPongTransaction}
        className='license-card_price-button'
      >
       {props.price} &#8364; Buy
      </Button>
        
      {/* <OutputContainer>
        {!stateTransactions && (
          <>
            <ContractAddress />
            {!pongAllowed && (
              <p>
                <Label>Time remaining: </Label>
                <span className='text-red-600'>{timeRemaining}</span> until able
                to pong
              </p>
            )}
          </>
        )}
        <PingPongOutput
          transactions={stateTransactions}
          pongAllowed={pongAllowed}
          timeRemaining={timeRemaining}
        />
      </OutputContainer> */}
    </>
  );
};
