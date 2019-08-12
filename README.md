# Overview

This repository is an extension to the excellent ["The Ultimate Flask Front-End"](https://realpython.com/the-ultimate-flask-front-end/#reader-comments), which is about several years old, and broken in a few places. This repository addresses those breakages. This repository also provides minimal instructions to deploy the app to AWS Lambda.

# 1. Setup

```sh
pip install -r requirements.txt
bower install
npm install
```

# 2. Local testing:

To test locally, run the following commands in **two** different tabs, and visit http://localhost:5000:

```sh
gulp
```

```sh
sh ./launch_server.sh
```

# 3. Upload to AWS

1. Create a `build/` directory at the top level
2. Copy `project/app.py` into `build/`
3. Copy `project/static/js/*` and `project/templates/*` *recursively* into `build/`
4. Deploy **either** using:

    4.1. [`zappa`](https://github.com/Miserlou/Zappa#about) (read the instructions carefully and deploy to **exactly 1 region**):
    ```sh
    zappa init
    zappa deploy
    ```
    
    4.2. Alternately,
    - create a Lambda handler function in `build/app.py`
    - create a CloudFormation stack by packaging the `build/` directory and deploying it to a Lambda function.
