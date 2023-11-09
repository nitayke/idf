# -*- coding: utf-8 -*-

import os
import requests
from re import search
import yaml
from PIL import Image


def get_urls(url):
    response = requests.get(url)
    splitted = response.text.split("mw-file-description")
    images_urls = []
    for i in splitted:
        patterns = r'src="([^"]*)"', r'title="([^"]*)"'
        match = search(patterns[0], i), search(patterns[1], i)
        if match[0] and match[1]:
            img_url = match[0].group(1)
            title = match[1].group(1)
            substrings = ("עד", "ישן", "תקופ", "גרס")
            if any(sub in title for sub in substrings) or not img_url.startswith("//"):
                continue
            img_url = "https:" + img_url
            images_urls.append((img_url, title))
        else:
            print("URL not found")
    return images_urls


def get_images(dir_name, url):
    images_urls = get_urls(url)
    os.makedirs(dir_name, exist_ok=True)

    count = 0
    l = len(images_urls)

    for img_url in images_urls:
        count += 1
        print(f"{count}/{l}")
        headers = {"User-Agent": "Mozilla/5.0"}
        try:
            response = requests.get(img_url[0], headers=headers)
        except:
            print("Error getting image")
            continue

        if response.status_code != 200:
            print(f"response code {response.status_code}")
            continue
        extension = img_url[0].split(".")[-1]

        try:
            with open(os.path.join(dir_name, img_url[1] + "." + extension), "wb") as f:
                f.write(response.content)
        except:
            print("Error in writing image")


def change_substring(directory, src="&quot;", dst=""):
    for filename in os.listdir(directory):
        if src in filename:
            new_filename = filename.replace(src, dst)
            os.rename(
                os.path.join(directory, filename), os.path.join(directory, new_filename)
            )


def delete_files(directory, substrings):
    # Loop over all files in the directory
    for filename in os.listdir(directory):
        # Check if the substring is in the filename
        if any(sub in filename for sub in substrings):
            # Get the full path of the file
            file_path = os.path.join(directory, filename)
            print("Deleting", file_path)
            # Delete the file
            os.remove(file_path)


def count_non_png_files(directory):
    # Initialize the count
    count = 0
    # Loop over all files in the directory
    for filename in os.listdir(directory):
        # Check if the file is not a PNG file
        if not filename.endswith(".png"):
            print(filename[::-1])
            # Increment the count
            count += 1

    return count


def write_filenames_to_file(directory, output_file):
    with open(output_file, "w") as f:
        for filename in os.listdir(directory):
            # Split the filename and extension, and write the filename to the file
            name, _ = os.path.splitext(filename)
            f.write(name + "\n")


def text_to_yaml(text_file, yaml_file):
    with open(text_file, "r") as f:
        lines = f.read().splitlines()

    with open(yaml_file, "w", encoding="utf-8") as f:
        yaml.dump(lines, f, allow_unicode=True)


def convert_images_to_png(directory):
    for filename in os.listdir(directory):
        if filename.endswith(".jpg") or filename.endswith(".jpeg"):
            img = Image.open(os.path.join(directory, filename))
            png_filename = os.path.splitext(filename)[0] + ".png"
            img.save(os.path.join(directory, png_filename), "PNG")


def filepath_to_list(filepath):
    res = []
    for i in filepath.split("c:")[1:]:
        res.append(i.split("\\")[-1][:-5])
    return "\n".join(res)


def add_quotes():
    with open("data.yaml", "r", encoding="utf-8") as f:
        y = yaml.safe_load(f)

    d = requests.get(
        "https://he.wikipedia.org/wiki/%D7%A1%D7%9E%D7%9C%D7%99_%D7%A6%D7%94%22%D7%9C"
    )
    t = d.text
    l = t.split('w-file-description" title="')
    all_quoted_names = []
    for i in l[1:]:
        s = i.split('">')[0].replace("&quot;", '"')
        all_quoted_names.append(s)
    d = requests.get(
        "https://he.wikipedia.org/wiki/%D7%A1%D7%9E%D7%9C%D7%99%D7%9D_%D7%95%D7%90%D7%95%D7%AA%D7%95%D7%AA_%D7%91%D7%97%D7%99%D7%9C_%D7%94%D7%90%D7%95%D7%95%D7%99%D7%A8_%D7%94%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99#%D7%AA%D7%92%D7%99_%D7%99%D7%97%D7%99%D7%93%D7%95%D7%AA"
    )
    t = d.text
    l = t.split('w-file-description" title="')
    for i in l[1:]:
        s = i.split('">')[0].replace("&quot;", '"')
        all_quoted_names.append(s)

    all_images = os.listdir("images")
    y["כל השאר"] = []
    print("processing...")

    for i in all_images:
        i1 = i[:-4]
        for key, value in y.items():
            if i1 in value:
                for j in all_quoted_names:
                    if j.replace('"', "") == i1:
                        y[key][value.index(i1)] = j
        for j in all_quoted_names:
            if j.replace('"', "") == i1:
                y["כל השאר"].append(j)
    print(y, len(y), len(y["כל השאר"]), len(y["normal"]))
    with open("new-data.yaml", "w", encoding="utf-8") as f:
        yaml.dump(y, f, allow_unicode=True)
