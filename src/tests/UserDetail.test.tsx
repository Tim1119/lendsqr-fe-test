import { render, screen,waitFor } from '@testing-library/react';
import axios from 'axios';
import { describe, it, beforeAll, afterEach, afterAll,expect } from 'vitest';
import UserDetailPage from '../pages/user/UserDetailPage';
import { BrowserRouter } from 'react-router-dom';
import { http, RestRequest, ResponseComposition, RestContext } from 'msw';
import { setupServer } from 'msw/node';


const server = setupServer(
	http.get(`${import.meta.env.VITE_MOCK_API_GENERATOR_URL}/users/${`SQFf8197g95`}`, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
		return res(ctx.json({ user: 'test-single-user-detail' }));
	})
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Users Detail Page', () => {
   
    it('renders without errors', async () => {
        render(<BrowserRouter><UserDetailPage /> </BrowserRouter>); 
        expect(await screen.findByTestId('user-detail-page')).toBeInTheDocument();
    });
  

});
