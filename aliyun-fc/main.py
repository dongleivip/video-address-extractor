# Python Aliyun FC to extract video address from webpage
import re
import urllib.request
import json


class NetworkException(Exception):
    pass


def extract_video_urls(page_url) -> list[str]:
    try:
        with urllib.request.urlopen(page_url) as response:
            html = response.read().decode('utf-8')  # use whatever encoding as per the webpage
            urls = re.findall(r"http://mpvideo.qpic.cn.+mp4?.+=[\d]+", html)
            iterator = map(lambda item: item.replace('\\x26amp;', '&'), urls)
            video_urls = list(iterator)
            return video_urls
    except urllib.request.HTTPError as e:
        if e.code == 404:
            raise NetworkException('地址错误')
        elif e.code == 403:
            raise NetworkException('权限异常，无法解析')
        else:
            print(e)
            raise NetworkException('网络异常，无法解析')


def handler(environ, start_response):
    # for k, v in environ.items():
    #    print("k, v", k, v)
    data = []
    try:
        # get query_string
        query_string = environ['QUERY_STRING']
        request_params = urllib.parse.parse_qs(query_string)
        page_url = request_params['url'][0]
        data = extract_video_urls(page_url)
    except NetworkException as e:
        data.append(e)

    status = '200 OK'
    response_headers = [('Content-type', 'text/json')]
    start_response(status, response_headers)
    # return value must be iterable
    return json.dumps(data)


if __name__ == '__main__':
    url = 'https://mp.weixin.qq.com/s/nySwvV9DxZuj1hkAvBfF_g'
    try:
        video_addr = extract_video_urls(url)
        print(video_addr)
    except Exception as err:
        print(err)
