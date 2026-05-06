# Contributing to Islamic Hub

Thank you for your interest in contributing to Islamic Hub! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

- Be respectful and inclusive of all community members
- Focus on constructive feedback
- Respect Islamic principles and values
- Maintain a professional tone in all communications

## Getting Started

### Prerequisites
- Node.js 22+
- pnpm 10+
- Python 3.8+ (for CLI development)
- Git

### Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/islamic-hub.git
cd islamic-hub

# Install dependencies
pnpm install

# Start development server
pnpm dev

# In another terminal, run the CLI
python3 hadith-cli.py
```

## Development Workflow

### 1. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes
- Follow the existing code style
- Write meaningful commit messages
- Keep commits atomic and focused

### 3. Test Your Changes
```bash
# Build the project
pnpm build

# Run type checking
pnpm check

# Format code
pnpm format
```

### 4. Submit a Pull Request
- Provide a clear description of changes
- Reference related issues
- Include screenshots for UI changes
- Ensure all checks pass

## Coding Standards

### React/TypeScript
- Use functional components with hooks
- Prefer TypeScript for type safety
- Follow the existing component structure
- Use shadcn/ui components when available

### CSS/Styling
- Use Tailwind CSS utilities
- Follow the design system colors
- Maintain responsive design
- Test on mobile devices

### Python
- Follow PEP 8 style guide
- Use type hints where possible
- Write docstrings for functions
- Keep the CLI lightweight

## Adding New Features

### Web Application
1. Create components in `client/src/components/`
2. Add pages in `client/src/pages/`
3. Update routing in `client/src/App.tsx`
4. Test responsive design

### CLI Tool
1. Add functions to `hadith-cli.py`
2. Update argument parser
3. Test with various inputs
4. Update README with new commands

### Hadiths
1. Add entries to the HADITHS array in `hadith-cli.py`
2. Include Arabic text, English translation, and source
3. Verify authenticity from reliable sources
4. Update web app if needed

## Commit Message Guidelines

Use clear, descriptive commit messages:

```
feat: Add prayer time notifications
fix: Correct Hadith display formatting
docs: Update README with new features
style: Format code according to standards
refactor: Improve component structure
test: Add unit tests for CLI tool
```

## Pull Request Process

1. Update documentation if needed
2. Add tests for new features
3. Ensure all CI checks pass
4. Request review from maintainers
5. Address feedback promptly

## Reporting Issues

When reporting bugs:
- Provide a clear description
- Include steps to reproduce
- Specify your environment (OS, browser, Node version)
- Include error messages or screenshots

## Feature Requests

When suggesting features:
- Explain the use case
- Describe the expected behavior
- Consider impact on existing features
- Discuss implementation approach

## Documentation

- Update README for user-facing changes
- Add JSDoc comments to functions
- Include examples for new features
- Keep documentation up-to-date

## Performance Considerations

- Monitor bundle size
- Optimize images and assets
- Use code splitting where appropriate
- Test on slower connections

## Accessibility

- Ensure keyboard navigation works
- Maintain proper color contrast
- Use semantic HTML
- Test with screen readers

## Security

- Never commit secrets or credentials
- Validate user input
- Keep dependencies updated
- Report security issues privately

## Questions?

- Open a discussion on GitHub
- Check existing issues and PRs
- Review the documentation
- Ask in the community

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for making Islamic Hub better! 🙏
