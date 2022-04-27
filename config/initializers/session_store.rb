if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_SwearingenUnlimitedLLC', domain: 'SwearingenUnlimitedLLC-json-api'
else
  Rails.application.config.session_store :cookie_store, key: '_SwearingenUnlimited'
end