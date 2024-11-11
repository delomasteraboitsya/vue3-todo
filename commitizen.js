'use strict'

export const types = [
  { value: 'docs', name: 'docs: Changed docs' },
  { value: 'fix', name: 'fix: Bug fix' },
  {
    value: 'chore',
    name: "chore: Other changes that don't modify src or test files",
  },
  { value: 'feat', name: 'feat: A new feature' },
  {
    value: 'refactor',
    name: 'refactor: A code change that neither fixes a bug nor adds a feature',
  },
  { value: 'style', name: 'styles: CSS changes' },
]
export const scopes = [
  { name: 'api' },
  { name: 'styles' },
  { name: 'other' },
  { name: 'info' },
]
export const messages = {
  type: 'Какие изменения вы вносите?',
  scope: '\nВыберите ОБЛАСТЬ, которую вы изменили (опционально):',
  customScope: 'Укажите свою ОБЛАСТЬ:',
  subject: 'Напишите КОРОТКОЕ описание в ПОВЕЛИТЕЛЬНОМ наклонении:\n',
  body: 'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
  breaking: 'Список BREAKING CHANGES (опционально):\n',
  footer:
    'Место для мета данных (тикетов, ссылок и остального). Например: SECRETMRKT-700, SECRETMRKT-800:\n',
  confirmCommit: 'Вас устраивает получившийся коммит?',
}
export const allowCustomScopes = true
export const allowBreakingChanges = false
export const subjectLimit = 72
