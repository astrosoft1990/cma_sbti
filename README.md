# SBTI 气象局人格测试

一个可直接部署到 GitHub Pages 的静态测试站：
- 30 道单选题
- 8 种岗位人格（局长、预报员、网管、人影专家、测报员、执法队员、财务、文秘）
- 每种人格包含图片与风趣自嘲解析

## 本地预览

```bash
python -m http.server 8000
```

打开 `http://localhost:8000`。

## 部署到 GitHub（Pages）

1. 在 GitHub 新建仓库（例如 `cma_sbti`）。
2. 在本地配置远程并推送：

```bash
git remote add origin <你的仓库URL>
git push -u origin work
```

3. 在仓库设置开启 Pages：
   - `Settings` → `Pages`
   - `Build and deployment` 选择 `GitHub Actions`
4. 等待 Actions 工作流 `Deploy static site to Pages` 成功。
5. 部署成功后会得到公开访问链接。

> 如果你希望主分支部署，把分支改成 `main` 并推送到 `main` 即可。
