import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignup() {
  const { mutate: signup, isPending: isSignup } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success('Your Account has been created');
    },
  });
  return { signup, isSignup };
}
