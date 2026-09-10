import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

import postsReducer from '../slices/postsSlice';
import Home from './Home';

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
    post: jest.fn(),
    delete: jest.fn(),
  },
}));

jest.mock('../components/Card', () => ({
  __esModule: true,
  default: ({ title }) => <article data-testid="post-card">{title}</article>,
}));

const createDeferred = () => {
  let resolve;
  let reject;

  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return { promise, resolve, reject };
};

const renderHome = () => {
  const store = configureStore({
    reducer: {
      posts: postsReducer,
    },
  });

  return render(
    <Provider store={store}>
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Home />
      </MemoryRouter>
    </Provider>,
  );
};

describe('Home loader during fetchPosts', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows loader while fetchPosts is pending and hides it after success', async () => {
    const deferred = createDeferred();
    axios.get.mockReturnValueOnce(deferred.promise);

    renderHome();

    expect(await screen.findByRole('progressbar')).toBeInTheDocument();

    deferred.resolve({
      data: [{ id: 1, uuid: 'post-1', title: 'Loaded post', body: 'Body', userID: 1 }],
    });

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });

    expect(screen.getByTestId('post-card')).toBeInTheDocument();
  });

  it('renders Error component when fetchPosts fails', async () => {
    const deferred = createDeferred();
    axios.get.mockReturnValueOnce(deferred.promise);

    renderHome();

    expect(await screen.findByRole('progressbar')).toBeInTheDocument();

    deferred.reject(new Error('Request failed'));

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(/ERROR:\s*Request failed/i)).toBeInTheDocument();
  });
});
