# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.1] - 2022-02-28

### Added

- Added CORS
- Added Dashboard Build

## [1.0.0] - 2022-02-28

### Added

- Added this changelog
- Added basic project using express template
- Added constants file for reusing texts
- Added event router
- Added event controller
- Added event service
- Added mongodb service
- Added bootup event register on app start (production only)
- Added `/` route in events router to get events from project from query params
- Added `/projects` route in events router to get a list of projects
- Added `/save` route in events router to save a new event

### Removed

- Removed Client router from template
- Removed Client service from template
