const { createPost } = require('../../src/controllers/postController');
const Post = require('../../src/models/Post');

jest.mock('../../src/models/Post');

describe('Post Controller', () => {
  it('should create a post', async () => {
    const req = { body: { title: 'Test', content: 'Content', category: '1' }, user: { _id: '123' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    Post.create.mockResolvedValue({ ...req.body, author: req.user._id });
    await createPost(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
  });
});
