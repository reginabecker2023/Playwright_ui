https://playwright.dev/docs/intro

npm init playwright@latest

npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

# Executar teste por tag
    npx playwright test --grep @login

# Instalar o Plugim
Playwright Test for VSCode 

# Executar em varios navegadores
 npx playwright test

# Assim executa todos os cenários no mesmo navegador para seguir no proximo navegador
  npx playwright test --workers=1

# Modelo ci .github/workflows/playwright.yml
https://playwright.dev/docs/ci-intro  



