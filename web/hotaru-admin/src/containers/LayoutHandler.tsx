import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import useSWR from 'swr';
import Loading from '../components/Loading';
import { IResp } from '../types';
import Layout from './Layout';

const LayoutHandler: FC = () => {
  const { data, error } = useSWR<IResp>('/api/session');
  return (
    error
      ? <Navigate to="/login" />
      : !data
        ? <Loading />
        : <Layout />
  );
};

export default LayoutHandler;
