import { type FC, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import NumberFormat from 'react-number-format';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {
  AMOUNT_RULES,
  CARD_RULES,
  CVV_RULES,
  DATE_RULES,
} from './Form.constants';

import useStyles from './Form.styles';

interface DefaultValues {
  card_number: string;
  expiration_date: string;
  cvv: string;
  amount: string;
}

const MainForm: FC = () => {
  const { classes } = useStyles();

  const [isLoading, setIsLoading] = useState(false);

  const [response, setResponse] = useState('');

  const {
    control,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm<DefaultValues>({
    mode: 'onChange',
  });

  const onSubmit = async (values: DefaultValues) => {
    try {
      setIsLoading(true);
      const request = await fetch('/api/purchase', {
        method: 'POST',
        body: JSON.stringify(values),
      });

      if (request.ok) {
        const data = await request.json();

        setResponse(data);

        setIsLoading(false);

        reset();
      } else {
        const { message } = await request.json();

        throw message;
      }
    } catch (error) {
      setIsLoading(false);
      setResponse('Something went wron');
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="card_number"
        defaultValue=""
        control={control}
        rules={CARD_RULES}
        render={({ field, fieldState }) => (
          <NumberFormat
            {...field}
            margin="dense"
            placeholder="Card number"
            disabled={isLoading}
            error={Boolean(fieldState.error)}
            inputProps={{ maxLength: 16 }}
            helperText={fieldState.error?.message}
            customInput={TextField}
          />
        )}
      />
      <div className={classes.bottomInputs}>
        <Controller
          name="expiration_date"
          defaultValue=""
          control={control}
          rules={DATE_RULES}
          render={({ field, fieldState }) => (
            <NumberFormat
              {...field}
              margin="dense"
              placeholder="MM/YYYY"
              format="##/####"
              mask={['M', 'M', 'Y', 'Y', 'Y', 'Y']}
              disabled={isLoading}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              customInput={TextField}
            />
          )}
        />
        <Controller
          name="cvv"
          defaultValue=""
          control={control}
          rules={CVV_RULES}
          render={({ field, fieldState }) => (
            <NumberFormat
              {...field}
              margin="dense"
              placeholder="CVV"
              disabled={isLoading}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              inputProps={{ maxLength: 3 }}
              customInput={TextField}
            />
          )}
        />
      </div>

      <Controller
        name="amount"
        defaultValue=""
        control={control}
        rules={AMOUNT_RULES}
        render={({ field, fieldState }) => (
          <NumberFormat
            {...field}
            margin="dense"
            placeholder="Amount"
            disabled={isLoading}
            error={Boolean(fieldState.error)}
            helperText={fieldState.error?.message}
            customInput={TextField}
          />
        )}
      />

      {response && (
        <pre>
          <code>{JSON.stringify(response, null, 4)}</code>
        </pre>
      )}

      <Button
        className={classes.submitButton}
        variant="contained"
        type="submit"
        disabled={!isValid || isLoading}
      >
        submit
      </Button>
    </form>
  );
};

export default MainForm;
